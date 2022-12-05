interface ITest {
  [key: string]: Array<never>;
}

const test: ITest = {
  test: [],
};

console.log(test);