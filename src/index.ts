import { Sorter } from './sorter/Sorter';
import { NumbersCollection } from './sorter/helper/NumbersCollection';
import { CharactersCollection } from './sorter/helper/CharactersCollection';
import { LinkedList } from './sorter/helper/LinkedList';

// const numberscollection = new NumbersCollection([10, 28, 3, 4, -5]);

// numberscollection.sort();
// console.log(numberscollection.data);

// const characterscoll = new CharactersCollection('danka je danka');

// characterscoll.sort();

// console.log(characterscoll.data);

const linkedlist = new LinkedList();

linkedlist.add(500);
linkedlist.add(50);
linkedlist.add(-50);
linkedlist.add(5);
linkedlist.add(-500);

linkedlist.sort();
linkedlist.print();
