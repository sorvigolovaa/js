var name = prompt("ismingiz");
var age = prompt("yoshingiz");

if ((name, age >= 18)) {
  console.log(`${name} aka siz prava olishingiz mumkin`);
} else {
  console.log(`${name} aka sizni yoshingiz prava olishga yetmaydi`);
}

var number = prompt("birinchi sonni kiriting");
var number2 = prompt("ikkinchi sonni kiriting");
var number3 = prompt("uchinchi sonni kiriting");

if (number > number2 && number > number3) {
  console.log(`${number} soni hammasidan katta`);
} else if (number2 > number && number2 > number3) {
  console.log(`${number2} soni hammasidan katta`);
} else if (number3 > number && number3 > number2) {
  console.log(`${number3} soni hammasidan katta`);
} else if (number === number2 && number === number3 && number2 == number3) {
  console.log("bu sonlar bir biriga teng");
}
