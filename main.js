//Using modules
import { LinkedList } from './linkedlist.js';

// Tests

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');

list.append('turtle2');

list.insertAt('cat', -1);

console.log(list.size());
console.log(list.toString());

list.pop();
list.pop();
console.log(list.headValue());
console.log(list.size());
console.log(list.toString());

console.log(list.at(2));

console.log(list.find('parrot'));
console.log(list.find('dg'));

list.removeAt(2);
console.log(list.toString());

/*list.prepend('bastet');

console.log(list.toString());

console.log(list.headValue());

console.log(list.contains('dog'));

console.log(list.tailValue());

console.log(list.size());*/
