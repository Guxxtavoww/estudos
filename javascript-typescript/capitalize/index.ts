function capitalize(text: string): string {
  const splitedText = text.trim().split(' ');

  const mappedText = splitedText.map((word) => {
    const [firstLetter, ...rest] = word;

    return firstLetter.toLocaleUpperCase().concat(...rest);
  });

  return mappedText.join(' ');
}

console.log(capitalize('sad'));
