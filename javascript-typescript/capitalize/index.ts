function capitalize(text: string): string {
  const [f, ...rest] = text;

  return f.toUpperCase().concat(...rest);
}

console.log(capitalize('sad dAs'));
