const { CardsFilterer } = require('./CardsFilterer');

const cardsFilterer = new CardsFilterer();

const find = (cardNumber) => {
  try {
    const response = cardsFilterer.findCardBrand(cardNumber);
  
    return response
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  find
};