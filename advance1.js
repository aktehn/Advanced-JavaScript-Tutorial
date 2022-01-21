/*====================________________Practice 1________________==================== */

Category = [
  { name: "aykut", surname: "dag" },
  { name: "aykut", surname: "al" },
  { name: "ali", surname: "tas" },
  { name: "ali", surname: "res" },
  { name: "ali", surname: "res" },
  { name: "veli", surname: "koc" },
];

const list = new Set(Category.map((item) => item.name));

//console.log(list);   // Set(3) {'aykut', 'ali', 'veli'}

/*====================________________Practice 2________________==================== */

const appState = "loading";
const keyName = "computer";
const app = {
  [appState]: true,
};

app[keyName] = "apple";

//console.log(app);   // {loading: true, computer: 'apple'}

/*====================________________Practice 3________________==================== */

const initialState = {
  loading: false,
  name: "",
  age: "",
};

const updateInitialState = (key, value) => {
  initialState[key] = value;
};
updateInitialState("name", "jhon");
updateInitialState("age", 24);
updateInitialState("loading", true);
updateInitialState("colors", ["red", "green", "yellow"]);

//console.log(initialState); // {loading: true, name: 'jhon', age: 24, colors: Array(3)}

/*====================________________Practice 4________________==================== */

class Player {
  constructor() {
    this.onePlayer = "alex";
    this.twoPlayer = "june";
  }
}

class newPlayer extends Player {
  constructor() {
    super();
    this.threePlayer = "jhon";
  }
}

//console.log(new newPlayer); // newPlayer {onePlayer: 'alex', twoPlayer: 'june', threePlayer: 'jhon'}

/*====================________________Practice 5________________==================== */

//Header.jsx
class Header {
  constructor(id, name, title) {
    this.id = id;
    this.name = name;
    this.title = title;
  }
}

//CategoryTwo.jsx
class CategoryTwo extends Header {
  constructor(id, name, title, link, list, headers, request, audio, path) {
    super(id, name, title);
    this.link = link;
    this.list = list;
    this.headers = headers;
    this.request = request;
    this.audio = audio;
    this.path = path;
  }
}

//console.log(new CategoryTwo("a", "b", "c", "d", "e", "f", "g", "h", "i")); // CategoryTwo {id: 'a', name: 'b', title: 'c', link: 'd', list: 'e', …}

/*====================________________Practice 6________________==================== */

const data = [15, 20, 5];

const incrementArray = (arr, x) => {
  let result = [];

  for (let a of arr) {
    result.push(a + x);
  }

  return result;
};

//console.log(incrementArray(data, 5));  // [20, 25, 10]

/*====================________________Practice 7________________==================== */
// *** Example 1 ***
const dataOne = [15, 20, 5];

const incr = (a, b) => a + b;
const decr = (a, b) => a - b;
const mul = (a, b) => a * b;

const smartOperations = (dataOne, op, pad) => {
  const result = [];

  for (const i of dataOne) {
    result.push(op(i, pad));
  }

  return result;
};

// console.log(smartOperations(dataOne, incr, 5)); // [20, 25, 10]
// console.log(smartOperations(dataOne, decr, 5)); // [10, 15, 0]
// console.log(smartOperations(dataOne, mul, 5)); //  [75, 100, 25]

// *** Example 2 ***
const newData = [4, 5, 6, 7, 8];

const one = (newData) => Math.floor(Math.PI * newData * newData);
const two = (newData) => Math.floor(2 * Math.PI * newData);
const three = (newData) => 5 * newData;

const allFunctions = (newData, a) => {
  const result = [];

  for (let i = 0; i < newData.length; i++) {
    result.push(a(newData[i]));
  }

  return result;
};

// console.log(allFunctions(newData, one)); // [50, 78, 113, 153, 201]
// console.log(allFunctions(newData, two)); // [25, 31, 37, 43, 50]
// console.log(allFunctions(newData, three)); // [20, 25, 30, 35, 40]

/*====================________________Practice 8________________==================== */
