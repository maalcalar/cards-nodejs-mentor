const { program } = require('commander');
const { find } = require('./actions');

program.version('3.0.0').description('A program to find brand from card number');

program
  .command('find <cardNumber>')
  .alias('f')
  .description('Find card brand from card number')
  .action((cardNumber) => {
    const response = find(cardNumber);
    console.log(response);
  });

program.parse(process.argv);