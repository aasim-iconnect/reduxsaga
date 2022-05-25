// define
function* generator() {
  const i = 1000;
  yield i;
  const result = yield i + 1;
  yield i + result;
}
// init
const gen = generator();
// use
console.log(gen.next());
console.log(gen.next()); // {value: 1000, done: false}
console.log(gen.next(1)); // {value: 1001, done: false}
console.log(gen.next()); // {value: 1003, done: false}
console.log(gen.next()); // {value: undefined, done: true}
