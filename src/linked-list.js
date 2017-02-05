const Node = require('./node');

class LinkedList {
    constructor() {this.length = 0}

    append(data) {
        var el = new Node(data);
        
            if (this.length == 0) 
			{this._tail = el;
            this._head = this._tail;}
       
	       if (this.length > 0) 
		    {this._tail.next = el;
            el.prev = this._tail;
            this._tail = el;}
			
        this.length = this.length + 1;
        return this;
                 }

    head() {
        var el = this._tail;	
		while (el.prev) {el = el.prev;}   
        return el.data;
    }
    tail() {
		var el = this._tail;	
		return el.data;
	}

     at(index) 
	 {
        var el = this._tail;
		var i = this.length - 1;
		 for (i; i > -1; i--) 
		     {if (i == index ) {return el.data;}
                          else {el = el.prev;}
        }
     }	
    insertAt(index, data) {
        var el2 = new Node(data);
        var el = this._tail;
		var i = this.length - 1;
        for (i; i > -1; i--) {
          if (i == index - 1 ) {
              el2.prev = el;
		      el2.next = el.next;
              el.next.prev = el2;
              el.next =el2;
          }
            else {el = el.prev;}
        }
        this.length = this.length + 1;
        return this;
    }

    isEmpty() 
	{
        if (this.length == 0) {return true;} 
		if (this.length != 0) {return false;} 
    }

    clear() 
	{
		this.length = 0;
		this._tail.prev = null;
		this._tail.data = null;
        this._tail.next = null;
        this._head.data = null;
        this._head.prev = null;
        this._head.next = null;
        return this
    }
   deleteAt(index) 
   {
	   var x = this.length;
         if (index < x) 
		    {
            var el = this._head;
            var i = 0;
           
		   
		   for (i; index - i > 0; i++) { el = el.next;};
		    for (i; i != x - 1; i++)
			 { 	el.data = el.next.data;
                this._tail = el;
                el = el.next;};
            this.length = this.length - 1;
            return this;
        } 
    }
	
	 reverse() {
        var el2 = this._tail;
        this._tail = null;
		var i = this.length - 1
        for (i; i > -1; i--)
		 {
            var el = {
              next: null,
              prev: null,
			  data: el2.data,
             
            };

            if (i == this.length - 1) {
               el2 = el2.prev;
			  this._tail = el;
             
            }
            if (i != this.length - 1)
			{
                this._tail.next = el;
                el.prev = this._tail;
                this._tail = el;
                el2 = el2.prev;
           }
        }
        return this;
    }
	
    indexOf(data) {
        var el = this._tail;
        while (el.prev) { el = el.prev;}   
        var metka = 0;
		var i = 0;
		var l = this.length;
        for (i; i < l; i++) {
          if (el.data == data ) {
               metka = 100;
			   return i;
             }
            else {el = el.next;}
          }
        if (metka == 0) {
           return -1;
         }    
     }

 
}

module.exports = LinkedList;
