//  vowel and consonants

let str = prompt('Enter a string:');
function vowles(str) {
    if (str == "a" || str == "i" || str == "o" || str == "u" || str == "e" || str == "A" || str == "E" || str == "I" || str == "O" || str == "U") {
        console.log(`${str} It is a alphabet is vowels`);
    }
    else {
        console.log(`${str} It is a alphabet is consonants`);
    }
}
vowles(str);