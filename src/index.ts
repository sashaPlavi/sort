import { Sorter } from './sorter/Sorter';
import { NumbersCollection } from './sorter/helper/NumbersCollection';

const numberscollection = new NumbersCollection([10, 28, 3, 4, -5]);
const sorter = new Sorter(numberscollection);

sorter.sort();
console.log(numberscollection.data);
