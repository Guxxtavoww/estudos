const date = new Date();

const formatedDate = new Intl.DateTimeFormat('pt-br', {
    dateStyle: 'full',
});

console.log(formatedDate.format(date));