/*
We’re going to model a 
(fictional) subway line that will travel from Central Park to the Brooklyn Bridge.
 In subway.js create a new DoublyLinkedList named subway.

*/

const DoublyLinkedList = require('./DoublyLinkedList.js');

const subway = new DoublyLinkedList();

subway.addToHead('TimesSquare');
subway.addToHead('GrandCentral');
subway.addToHead('CentralPark');
subway.printList();

subway.addToTail('PennStation');
subway.addToTail('WallStreet');
subway.addToTail('BrooklynBridge');
subway.printList();

/* Central Park, Brooklyn Bridge and Times Square are under construction, so we should remove them */

subway.removeHead();
subway.removeTail();
subway.printList();

subway.removeByData('TimesSquare');
subway.printList();