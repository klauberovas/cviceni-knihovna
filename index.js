// Knihovna

// Vytvořte objekt představující jednu knihu v knihovně.

// V JavaScriptovém programu vytvořte objekt představující jednu knihu v knihovně. Uvažte, jaké vlastnosti může taková kniha mít. Rozhodně budeme chtít název, autora a počet stran. Přidejte do objektu alespoň tři další vlastnosti tak, aby obsahovaly čísla, řetězce i vnořený objekt.
const book1 = {
  name: '9.listopad',
  author: 'Colleen Hover',
  numberOfPages: 225,
  genre: 'Literatura světová, Romány pro ženy',
  originalName: 'November Nine',
  typeOfBook: {
    bookbinding: 'brožovaná',
    language: 'český',
  },
  price: {
    priceForSale: 299,
    currency: 'czk',
  },
};

let library__info = document.getElementsByClassName('library__info');
console.log(library__info.length);
library__info[0].innerHTML +=
  '<h2>' +
  book1.name +
  '</h2>' +
  '<p>' +
  book1.author +
  '</p>' +
  '<p>' +
  book1.price.priceForSale +
  ' ' +
  book1.price.currency +
  '</p>';
// Vytvořte alespoň jednu další knihu se stejnými vlastnostmi ale jinými hodnotami.
const book2 = {
  name: 'Vzpomínky na něj',
  author: 'Colleen Hover',
  numberOfPages: 301,
  genre: 'Literatura světová, Romány pro ženy',
  originalName: 'Reminders of Him',
  typeOfBook: {
    bookbinding: 'brožovaná',
    language: 'český',
  },
  price: {
    priceForSale: 349,
    currency: 'czk',
  },
};

let library__info2 = document.getElementsByClassName('library__info');
console.log(library__info.length);
library__info[1].innerHTML +=
  '<h2>' +
  book2.name +
  '</h2>' +
  '<p>' +
  book2.author +
  '</p>' +
  '<p>' +
  book2.price.priceForSale +
  ' ' +
  book2.price.currency +
  '</p>';

const book3 = {
  name: 'To nejlepší v nás',
  author: 'Colleen Hover',
  numberOfPages: 285,
  genre: 'Literatura světová, Romány pro ženy',
  originalName: 'All Your Perfects',
  typeOfBook: {
    bookbinding: 'brožovaná',
    language: 'český',
  },
  price: {
    priceForSale: 329,
    currency: 'czk',
  },
};

let library__info3 = document.getElementsByClassName('library__info');
console.log(library__info.length);
library__info[2].innerHTML +=
  '<h2>' +
  book3.name +
  '</h2>' +
  '<p>' +
  book3.author +
  '</p>' +
  '<p>' +
  book3.price.priceForSale +
  ' ' +
  book3.price.currency +
  '</p>';
