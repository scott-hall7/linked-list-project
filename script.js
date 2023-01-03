class Node {
    constructor(value)   {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor()   {
        this.head = null;
    }

    //  Adds new node to end of linked list
    append(value)   {
        const newNode = new Node(value);
        if (this.head === null) return this.head = newNode;
        let temp = this.head;
        while(temp.nextNode != null)    {
            temp = temp.nextNode;
        }
        temp.nextNode = newNode;
    }

    prepend(value)  {
        const newNode = new Node(value);
        let temp = this.head
        this.head = newNode;
        newNode.nextNode = temp;
    }

    size()  {
        let count = 0;
        let temp = this.head;
        while(temp != null)    {
            temp = temp.nextNode;
            count++;
        }
        return count;
    }

    findHead()  {
        if (this.head === null) return null;
        return this.head;
    }

    findTail()  {
        let temp = this.head;
        while(temp.nextNode != null)    {
            temp = temp.nextNode;
        }
        return temp;
    }

    atIndex(index)  {
        let count = 0;
        let temp = this.head;
        while(temp != null)    {
            if (count === index) return temp;
            temp = temp.nextNode;
            count++;
        }
        return 'Index does not exist.';
    }

    pop()   {
        let currentNode = this.head;
        let previousNode = null;
        while (currentNode.nextNode != null)    {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
        }
        previousNode.nextNode = null;

    }

    contains(value) {
        let temp = this.head;
        while(temp != null)    {
            if (temp.value === value) return true;
            temp = temp.nextNode;
        }
        return false;
    }

    find(value) {
        let count = 0;
        let temp = this.head;
        while(temp != null)    {
            if (temp.value === value) return count;
            temp = temp.nextNode;
            count++;
        }
        return null;
    }

    toString()  {
        let temp = this.head;
        let string = "";
        while(temp != null)    {
            string += `(${temp.value}) -> `
            temp = temp.nextNode
        }
        string += 'null';
        return string;
    }

    insertAt(value, index)  {
        let count = 0;
        let currentNode = this.head;
        let previousNode = null;
        while(count < index)    {
            previousNode = currentNode;
            currentNode = currentNode.nextNode;
            count++;
        }
        const newNode = new Node(value);
        previousNode.nextNode = newNode;
        newNode.nextNode = currentNode;
    }

    removeAt(index) {
        let count = 0;
        let currentNode = this.head;
        if(index === 0) this.head = currentNode.nextNode;
        else {
            let previousNode = null;
            while(count < index)    {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
                count++;
            }
            previousNode.nextNode = currentNode.nextNode;
        }
    }
}

const linkedList = new LinkedList();

// Linked List Testing & Results
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.toString(); // (1) -> (2) -> (3) -> (4) -> (5) -> null

linkedList.size(); // 5
linkedList.findHead(); //  Node {value: 1, nextNode: Node}
linkedList.findTail(); //  Node {value: 5, nextNode: null}

linkedList.atIndex(3); //  Node {value: 4, nextNode: Node}
linkedList.atIndex(7); //  Index does not exist.

linkedList.pop(); //  (1) -> (2) -> (3) -> (4) -> null

linkedList.contains(4); // True
linkedList.contains(10); // False

linkedList.find(3); //  Index: 2
linkedList.find(10); //  null

linkedList.insertAt(1, 3); // (1) -> (2) -> (3) -> (1) -> (4) -> null

linkedList.removeAt(1);  //  (1) -> (3) -> (1) -> (4) -> null

linkedList.prepend(55); // (5) -> (1) -> (3) -> (1) -> (4) -> null









