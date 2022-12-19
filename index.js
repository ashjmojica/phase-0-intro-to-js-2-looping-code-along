// Code your solutions in this file
  function writeCards(names) {
    var arr = []
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);

  }

  return arr
}

writeCards(names);

const gifts = ["teddy bear", "drone", "doll"];

function countDown(num){

while (num > -1) {

console.log(num);

num--;
}
}