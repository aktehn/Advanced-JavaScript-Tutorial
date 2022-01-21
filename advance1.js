/*====================________________Practice 1________________==================== */
// map fonksiyonunu new Set() içine aldığımızda aynı olan değerleri sadece bir defa yazar...
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

console.log(new newPlayer); // newPlayer {onePlayer: 'alex', twoPlayer: 'june', threePlayer: 'jhon'}
