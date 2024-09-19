const users = [
  {
    id: 0,
    isim: "emre",
    age: 20,
  },
  {
    id: 1,
    isim: "efe",
    age: 7,
  },
  {
    id: 2,
    isim: "kutle",
    age: 9,
  },
];

const test = users.filter((user) => {
  if (user.age === 20) {
    return true;
  }
});

console.log(test);
