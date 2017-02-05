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
	var el = new Node(data);
  if (this.length == 0) 
      {
      this._head = el;
      this._tail = el;
      }
  if (this.length > 0) 
	  {
      this._tail.next = el;
      el.prev = this._tail;
      this._tail = el;
      }	
	    this.length = this.length + 1 ;
        return this;
	}

    head() {

		var el = this._tail;
		do {el = el.prev;} while (el.prev);
        return el.data;
		}

    tail() {
		 return this._tail.data;
		}

    at(index) {
		var ee = this._tail;
        for (var i = this.length - 1; i > -1; i--)
		           {
          if (i === index )
		   {
          return ee.data;
		  break;
            }
           else {ee = ee.prev;}
		  		    }
	}
    insertAt(index, data) {
		
		var x1 = this._tail;
	    var x = new Node(data);
        for (var i = this.length - 1; i > -1; i--) 
		{
          if (i === index - 1 )
		   { x.next = x1.next;
            x.prev = x1;
            x1.next.prev = x;
            x1.next = x;
            break;
          }
            else {
				x1 = x1.prev;
				}
        }
        this.length =  this.length + 1;
          
		  return this;
		
		}

    isEmpty() {
		if (this.length > 0) {return false;} 
		if (this.length == 0) {return true;} 
		}

    clear() {
	      this.length = 0;
         this._tail.data = null;
         this._tail.prev = null;
         this._tail.next = null;
		 this._head.prev = null;
         this._head.data = null;
         this._head.next = null;
        
		return this;
		}

    deleteAt(index) 
{
	
	 if ( index > -1 && index < this.length) 
	 {       var i = 0;
             var x = this._head;
            do {x = x.next;
                i = i + 1;} 
			while (i < index);
           
		   do { x.data = x.next.data;
                this._tail = x;
                x = x.next;
                i = i + 1; } 
		    while (i != this.length - 1); 
		   
		   
            x.next = null;
		    x.data = null;
            this.length = this.length - 1;
           
		    return this;
           } 
          }
	

    reverse() {
		
	    var x = this._tail;
		this._tail = null;
    
	     for (var i = this.length - 1; i > -1; i--) 
		    {
             var x1 = {
              data: x.data,
              next: null,
              prev: null,
             };

            if (i === this.length - 1) {
              this._tail = x1;
              x = x.prev;
            }   else {
                  this._tail.next = x1;
                  x1.prev = this._tail;
                  this._tail = x1;
                  x = x.prev;
           }
        }
        return this;
		
		}

    indexOf(data) 
	{
		
		var x = this._tail;
		
        while (x.prev) {
            x = x.prev;
        }   
        var xx = 0;
        for (var i = 0; i < this.length; i++) {
          if (x.data === data ) {
               return i;
               xx = 1;
               break;
          }
            else {x = node.next;}
        }
        if (xx === 0) {
           return -1;
        }    
		
		}
};


module.exports = LinkedList;
