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
    isim: "kitas",
    age: 12,
  },
];

const bebeler = [];
users.forEach((user) => {
  if (user.age < 20) {
    bebeler.push(user.isim);
  } else {
    console.log(user);
  }
});

console.log(bebeler);
