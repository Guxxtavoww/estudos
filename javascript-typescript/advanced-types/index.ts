interface IUser {
  readonly id: string;
  readonly email: string;
  readonly password: string;
}

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
}

type MutableUser = Mutable<IUser>;
