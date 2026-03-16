export interface TestTableType<TInput, TExpected> {
    input: TInput;
    expected: TExpected;
}

export interface TestTableWithNameType<TInput, TExpected> extends TestTableType<
    TInput,
    TExpected
> {
    testName: string;
}
