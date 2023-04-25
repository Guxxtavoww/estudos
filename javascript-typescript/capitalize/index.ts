function capitalize(text: string): string {
  const spitedText = text.trim().split(' ');

  const mappedText = spitedText.map((word) => {
    const [firstLetter, ...rest] = word;

    return firstLetter.toLocaleUpperCase().concat(...rest);
  });

  return mappedText.join(' ');
}

console.log(capitalize('sad'));
