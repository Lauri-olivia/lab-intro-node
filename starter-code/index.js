class SortedList {
  constructor(numbers) {
    this.items = [];
    this.length = this.items.length;
  }
  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b); // von klein nach groß nur bei Zahlen
    this.length++;
  }
  get(nth) {
    return this.items[nth];
  }
  max() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return Math.max(...this.items); // Math.max nimmt keinen array perse rein
  }

  min() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return Math.min(...this.items);
  }

  sum() {
    return this.items.reduce((acc, val) => acc + val, 0);
  }

  average() {
    if (this.length == 0) throw new Error("EmptySortedList");
    return this.sum(this.items) / this.length;
  }
}

module.exports = SortedList;
