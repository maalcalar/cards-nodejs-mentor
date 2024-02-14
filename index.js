const { CardsFilterer } = require('./CardsFilterer');

const cardNumber = '6221270445755378';

const cardsFilterer = new CardsFilterer();

try {
  const response = cardsFilterer.findCardBrand(cardNumber);

  console.log(response);
} catch (error) {
  console.log(error);
}
