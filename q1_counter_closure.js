function createCounter() {
  let count = 0;
  return {
    increment() {
      count += 1;
      return count;
    },
    getCount() {
      return count;
    },
    reset() {
      count = 0;
      return count;
    },
  };
}

const counter = createCounter();
console.log('Count:', counter.getCount());
console.log('Count:', counter.increment());
console.log('Count:', counter.increment());
console.log('Count:', counter.getCount());
