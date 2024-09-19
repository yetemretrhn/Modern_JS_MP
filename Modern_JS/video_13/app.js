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

const test = users.map((user) => {
  if (user.age < 20) {
    return user;
  } else {
    return "büyük";
  }
});
console.log(test);
