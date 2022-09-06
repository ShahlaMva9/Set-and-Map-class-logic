// class MySet {
//   constructor(arr) {
//     this.arr = arr;
//   }
//   add(value) {
//     if (this.arr.indexOf(value) == -1) {
//       this.arr.push(value);
//     }
//   }
//   has(value) {
//     let index = this.arr.indexOf(value);
//     if (index == -1) {
//       return false;
//     }
//     return true;
//   }
//   delete(value) {
//     let index = this.arr.indexOf(value);
//     this.arr.splice(index, 1);
//   }
//   clear() {
//     this.arr.splice(0);
//   }
//   get size() {
//     return this.arr.length;
//   }
// }
// const set1 = new MySet([1, 2, 3, 4]);
// set1.add(5);
// set1.add(5);
// set1.add(5);
// set1.add("A");
// set1.add("B");
// set1.add("A");
// set1.delete(2);
// // set1.clear();

// console.log(set1);
// console.log(set1.size);

class MyMap {
  constructor(arr) {
    this.arr = [];
  }
  set(key, value) {
    this.arr.push({ key: key, value: value });
  }
  get(val) {
    const findElem = this.arr.find((e) => e.key === val);
    return findElem?.value;
  }
  clear() {
    this.arr = [];
  }
  delete(val) {
    const findElemIndex = this.arr.findIndex((i) => i.key == val);
    this.arr.splice(findElemIndex, 1);
  }
  has(val) {
    const findElem = this.arr.find((e) => e.key == val);
    return findElem == undefined ? false : true;
  }
  get size() {
    return this.arr.length;
  }
}

const user1 = new MyMap();

user1.set("name", "shahla");
user1.set("age", "5");
user1.set("smth", "smthvalues");
let a = [1, 2];
user1.set(a, [3, 4]);
console.log(user1.get(a));
//  user1.clear();
// console.log(user1.get("ages"));
// user1.delete("age");
// console.log(user1.has("name"));
// console.log(user1.size);
console.log(user1);
