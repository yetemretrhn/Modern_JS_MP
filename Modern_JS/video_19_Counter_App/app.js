//Butonları HTML'den al
//Butonlara tıklanmış mı dinle
//Title'ı bul ve onu arttır ya da azalt

const increaseButton = document.querySelector(".arttir");
const decreaseButton = document.querySelector(".azalt");
const number = document.querySelector("#numara");
let initialNumber = 0;

increaseButton.addEventListener("click", () => {
  initialNumber++;
  number.innerHTML = `<i>${initialNumber}</i>`;
});

decreaseButton.addEventListener("click", () => {
  initialNumber--;
  number.innerHTML = `<i>${initialNumber}</i>`;
});
