// const user = [
//   {
//     id: 0,
//     isim: "emre",
//     surname: "tr",
//     age: 22,
//     isTrue: true,
//     skills: ["HTML", "CSS", "JS"],
//   },
// ];

// const isim = user[0].isim;
// const yas = user[0].age;

// const { age, isim, ...rest } = user[0];
// console.log(rest);

const skills = ["html", "css", "js"];
// const [birinciIndex, ikinciIndex, ucuncuIndex] = skills;
// console.log(birinciIndex, ucuncuIndex);
const [birinci, ikinci, ...rest] = skills;
console.log(rest);
