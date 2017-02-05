const Node = require('./node');

class LinkedList {
    constructor()
	{
	this.lenght = 0;
		}

    append(data) 
	{ 
		if (this.length == 0) 
			{
			this._head = Node(data);
            this._tail = Node(data)
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
