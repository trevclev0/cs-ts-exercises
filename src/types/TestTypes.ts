export interface TestTableType<TInput, TExpected> {
    input: TInput;
    expected: TExpected;
}

export interface TestTableWithDescriptionType<TInput, TExpected>
    extends TestTableType<TInput, TExpected> {
    description: string;
}
