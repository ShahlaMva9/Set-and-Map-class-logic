class MySet {
  constructor(arr) {
    this.arr = arr;
  }
  add(value) {
    if (this.arr.indexOf(value) == -1) {
      this.arr.push(value);
    }
  }
  has(value) {
    let index = this.arr.indexOf(value);
    if (index == -1) {
      return false;
    }
    return true;
  }
  delete(value) {
    let index = this.arr.indexOf(value);
    this.arr.splice(index, 1);
  }
  clear() {
    this.arr.splice(0);
  }
  get size() {
    return this.arr.length;
  }
}
const set1 = new MySet([1, 2, 3, 4]);
set1.add(5);
set1.add(5);
set1.add(5);
set1.add("A");
set1.add("B");
set1.add("A");
set1.delete(2);
// set1.clear();

console.log(set1);
console.log(set1.size);
