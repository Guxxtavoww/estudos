const arr = [{ message: 'teste' }, { message: 'teste' }, { message: 'teste' }, { message: 'teste' }, { message: 'oi' }];

const filteredArr = arr.filter(item => item.message !== 'teste'); // retorna os items do array onde a condicao for TRUE;

console.log(filteredArr);
