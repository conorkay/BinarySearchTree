class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.array = removeDupes(mergeSort(array));
    this.root = this.buildTree(this.array, 0, this.array.length - 1);
  }

  buildTree(array, start, end) {
    let mid = Math.floor((start + end) / 2);

    if (start > end) {
      return null;
    }

    let root = new Node(array[mid]);
    if (array.length === 0) {
      return null;
    }

    root.left = this.buildTree(array, start, mid - 1);
    root.right = this.buildTree(array, mid + 1, end);

    return root;
  }

  insert(value){
    let newNode = new Node(value);
  }

  findValue(value) {
    let currNode = this.root;
    if (currNode.data === value) {
      return currNode;
    }
  }

  height(node) {}
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);

  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function removeDupes(arr) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i + 1, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

let array = [5, 3, 6, 7, 2, 89, 77, 43, 32, 5, 5];
let tree = new Tree(array);
console.log(array);
console.log(removeDupes(mergeSort(array)));
prettyPrint(tree.root);
