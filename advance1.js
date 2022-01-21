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
