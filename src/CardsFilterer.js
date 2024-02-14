const fixtures = require('./fixtures');
const cardsInfo = fixtures.cardsInfo;

class CardsFilterer {
  static validateString = (string) => typeof string === 'string';

  static filterCardNumberByLength = (cardNumber) => cardsInfo.acceptedLengths.includes(cardNumber.length)

  static filterByBrand = (cardNumber, brandInfo) => {
    const cardNumberLength = cardNumber.length;

    if(brandInfo.length.includes(cardNumberLength)) {
      for (let index = 0; index < brandInfo.prefixes.length; index++) {
        const prefix = brandInfo.prefixes[index];
        if(cardNumber.startsWith(prefix)) return true;
      }
    }

    return false;
  }

  findCardBrand = (cardNumber) => {
    if (!CardsFilterer.validateString(cardNumber)) throw Error('Card Number must be String type.');
    if (!CardsFilterer.filterCardNumberByLength(cardNumber)) throw Error('Card Number does not match valid length.');

    for (let index = 0; index < cardsInfo.cardBrandsInfo.length; index++) {
      const brandInfo = cardsInfo.cardBrandsInfo[index];
      if(CardsFilterer.filterByBrand(cardNumber, brandInfo)) {
        return brandInfo.brand;
      }
    }

    throw Error('Card Number does not match any brand in database. Sorry.');
  }
}

module.exports = {
  CardsFilterer
}