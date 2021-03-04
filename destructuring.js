// Opdracht 1: destructure price en refreshRate, en log ze in de console

const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

const {price, refreshRate, screenType} = product;
console.log(price, refreshRate, screenType);

// Opdracht 2: destructure type en brand en log ze in de console

const productInformation = {
  general: {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
  },
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
}

const {type, brand} = productInformation.general;
console.log(type, brand);

// Opdracht 3: destructure wifi en bluetooth en log ze in de console

const tvOptions = {
  options: {
    colors: [
      'black',
      'silver',
      'gold',
      'sand',
    ],
    connectivity: {
      popular: {
        wifi: true,
        bluetooth: false,
      },
      infrared: false,
    }
  },
};

const {wifi, bluetooth} = tvOptions.options.connectivity.popular;
console.log(wifi, bluetooth);

// Opdracht 4: destructure beide waardes uit deze array en log ze in de console

const connectivity = ['wifi', 'bluetooth'];

const [connectionType1, connectionType2] = connectivity;
console.log(connectionType1, connectionType2);

// Opdracht 5: destructure de eerste en derde waarde uit deze array en log ze in de console

const tvSizes = [41, 43, 46, 56, 65];

const [first, , third] = tvSizes;
console.log(first, third);

// opdracht 6: destructure name en adress uit de return value van deze functie en log ze in de console

function getCompanyDetails() {
  return {
    name: 'Novi Hogeschool',
    adress: 'Zonnebaan 9, Utrecht',
  }
}

const {name, adress} = getCompanyDetails();
console.log(name, adress);

// opdracht 7: destructure beide zinnetjes uit de return value van deze functie en log ze in de console. Let op: de functie verwacht argumenten bij het aanroepen!

function getDetails(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}

const [sentence1, sentence2] = getDetails('Marijn', 22);
console.log({sentence1, sentence2});
