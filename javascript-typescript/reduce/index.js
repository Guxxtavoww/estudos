const productsArray = [
  { description: 'Teste', price: 10 },
  { description: 'Teste2', price: 10 },
  { description: 'Teste3', price: 30 },
  { description: 'Teste4', price: 11 },
  { description: 'Teste5', price: 10 },
  { description: 'Teste6', price: 10 },
  { description: 'Teste7', price: 122 },
  { description: 'Teste8', price: 21 },
  { description: 'Teste9', price: 121 },
  { description: 'Teste10', price: 10 },
  { description: 'Teste11', price: 10 },
];

const totalProductsPrice = productsArray.reduce(
  (totalContext, currentProduct) => {
    console.log(
      `Variavel que persite o valor em cada index que é iterado, e comeca com o segundo parametro do reduce ${totalContext}`
    );
    console.log(`Index atual: ${JSON.stringify(currentProduct)}`);

    return totalContext + currentProduct.price; // a cada index que passa esse retorno vai para o totalContext
  },
  0
);

console.log({ totalProductsPrice });
