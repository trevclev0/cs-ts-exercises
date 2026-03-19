export interface TestTableType<TInput, TExpected> {
    input: TInput;
    expected: TExpected;
    testName: string;
}

export interface ErrorTableType<TInput> {
    input: TInput;
    errorMsg: string;
    testName: string;
}
