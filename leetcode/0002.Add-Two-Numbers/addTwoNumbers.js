
let l1 = {

    value: 2,
    next: {
        value: 4,
        next: {
            value: 3,
            next: null
        }
    }

}

let l2 = {

    value: 5,
    next: {
        value: 6,
        next: {
            value: 4,
            next: null
        }
    }

}

class ListNode {
    constructor(value){
        this.value = value;
        this.next =null;
    }
 }

// console.log(addTwoNumbers(l1, l2));

changeHeadList();

function changeHeadList(){
    var newListNode = new ListNode(0);
    var headOfNewListNode = {...newListNode};

    headOfNewListNode.next = new ListNode(1);
    headOfNewListNode = headOfNewListNode.next;
    console.log("new1");
    console.log(newListNode);
    console.log("head1");
    console.log(headOfNewListNode);
    headOfNewListNode.next = new ListNode(2);
    headOfNewListNode = headOfNewListNode.next;
    console.log("new2");
    console.log(newListNode);
    console.log("head2");
    console.log(headOfNewListNode);
}

function addTwoNumbers(l1, l2) {
    var newListNode = new ListNode(0);
    var headOfNewListNode = newListNode;
    
    // Initialise variables to be utilised on each run
    var sum = 0;
    var carry = 0;
    while (l1 !== null || l2 !== null || sum > 0) {
        console.log("new")
        console.log(newListNode)
        
        // If there's an element in l1 to be added, add it to the sum and move to the next l1 node
        if (l1 !== null) {
            sum +=  l1.value;
            l1 = l1.next;
        }

        // If there's an element in l2 to be added, add it to the sum and move to the next l2 node
        if (l2 !== null) {
            sum += l2.value;
            l2 = l2.next;
        }

        // Check if the sum for these nodes exceeds 10
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        // Add the sum to the new ListNode, and then move it to the next entry
        headOfNewListNode.next = new ListNode(sum);
        console.log("new head")
        console.log(newListNode);
        headOfNewListNode = headOfNewListNode.next;
        console.log("new head next")
        console.log(newListNode);
      

        // Set the sum for the next addition to equal the carry-over (if there was one)
        sum = carry;
        carry = 0;
    }

    // Return the constructed ListNode (ignoring the first dummy entry)
    return newListNode.next;
}





