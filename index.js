'use strict'

const func = (root, parent, child) => {
  counter = 0;
  if (root.value !== parent.value) {
    func(node.left);
    func(node.righ);
  }
  if (node.value === (parent.value && (parent.left || parent.right === true))) {
    count++;
    func(node.left);
    func(node.right);
  }
  if (node === null && node.value !== child.value) {
    count++;
    func(node.left);
    func(node.right);
  }
  if (node.value === child.value) {
    return counter;
  }
  else (node === null); {
    return;
  };
}





