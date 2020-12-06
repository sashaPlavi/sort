import { Sorter } from './sorter/Sorter';
import { NumbersCollection } from './sorter/helper/NumbersCollection';
import { CharactersCollection } from './sorter/helper/CharactersCollection';

// const numberscollection = new NumbersCollection([10, 28, 3, 4, -5]);
// const sorter = new Sorter(numberscollection);

// sorter.sort();
// //console.log(numberscollection.data);

const characterscoll = new CharactersCollection('danka je danka');
const sorter = new Sorter(characterscoll);

sorter.sort();

console.log(characterscoll.data);
