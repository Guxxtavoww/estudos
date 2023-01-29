interface IUser {
  readonly id: string;
  readonly email: string;
  readonly password: string;
}

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type MutableUser = Mutable<IUser>;

// const routes = <const T>(routes: Array<T>) => {
//   const redirect = (from: T, to: T) => {};

//   return { redirect };
// }

// const router = routes(['/admin', '/login', '/register']);

// router.redirect('')

// só no typescript 5.0

interface IObj {
  a: 'Teste1A';
  a2: 'A2';
  b: 'R';
}

type ValuesOfKeysStartingWithA<
  Obj,
  _ExtractedKeys extends keyof Obj = Extract<keyof Obj, `a${string}`>
> = {
  [K in _ExtractedKeys]: Obj[K];
}[_ExtractedKeys];

type NewUnion = ValuesOfKeysStartingWithA<IObj>;
