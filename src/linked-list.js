const Node = require('./node');

class LinkedList {
    constructor()
	{
	this.lenght = 0;
    this._head = null;
	this._tail = null;

		}

    append(data) 
	{ 
		if (this.length == 0) 
			{
			this._head = Node(data);
            this._tail = Node(data)
            }
		if (this.length > 0) 
			{
			this._tail.next = Node(data);
            node.prev = this._tail;
            this._tail = Node(data);
            }	
	}

    head() {}

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
};

module.exports = LinkedList;
