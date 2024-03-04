class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = this.buildTree(mergeSort(array));
  }

  buildTree(array) {
    let mid = Math.floor(array.length / 2);
    let root = new Node(array[mid]);
  }
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
