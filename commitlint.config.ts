import { execSync } from "node:child_process";
import type { UserConfig } from "cz-git";
import { defineConfig } from "czg";

type CommitDetails = {
  commitType: string;
  issueId: string;
};

type AI_Question = {
  maxSubjectLength: number;
  diff: string;
};

const useAI = process.env.CZG_AI_ENABLED === "true";

const getBranchCommitDetails = (): CommitDetails | null => {
  try {
    const branch = execSync("git branch --show-current").toString().trim();
    const match = branch.match(/^(?<type>\w+)\/(?<issueId>\d+)-/);
    if (match?.groups) {
      return {
        commitType: match.groups.type,
        issueId: `#${match.groups.issueId}`,
      };
    }
  } catch {
    return null;
  }
  return null;
};

const conventionalCommitDetails = getBranchCommitDetails();

const aiQuestionCB = ({ maxSubjectLength, diff }: AI_Question): string => {
  return [
    "For the following Git diff, please write an insightful, concise Git commit message.",
    "Please produce output in the imperative mood, without a prefix.",
    `Note that the length of this sentence must not exceed ${maxSubjectLength} characters! :`,
    "```diff",
    diff,
    "```",
  ].join("\n");
};

const config = defineConfig({
  extends: ["gitmoji"],
  rules: {
    "header-max-length": [2, "always", 100],
  },
  prompt: {
    useEmoji: true,
    emojiAlign: "left",
    issuePrefixes: [
      {
        value: "refs",
        name: "refs:   reference a GitHub issue without closing",
      },
      {
        value: "closes",
        name: "closes: close a GitHub issue on merge to main",
      },
    ],
    defaultIssues: conventionalCommitDetails?.issueId,
    defaultType: conventionalCommitDetails?.commitType,
    footer: {
      defaultFooterPrefix: "refs:",
    },
    useAI,
    aiQuestionCB,
  } as UserConfig["prompt"],
});

export default config;
