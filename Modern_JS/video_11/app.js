const users = [
  { id: 0, isim: "Emre", age: 23 },
  { id: 1, isim: "Hale", age: 19 },
  {
    id: 2,
    isim: "mehmet",
    age: 18,
  },
];

const yirmidenKucukler = [];

for (let index = 0; index < users.length; index++) {
  if (users[index].age < 20) {
    yirmidenKucukler.push(users[index].isim);
  }
}

console.log(yirmidenKucukler);
