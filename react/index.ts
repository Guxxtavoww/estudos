interface ITest<T = any> {
  [key: string]: Array<T>;
}

const test: ITest = {
  test: [],
};

console.log(test);
