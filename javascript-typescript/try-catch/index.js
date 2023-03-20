const hours = new Date().getHours();

const someFunction = () => {
  if (hours >= 17) {
    throw 'erro horario invalido';
  }
};

try {
  someFunction();
} catch (error) {
  console.log({ error });
}
