/* 
 num1 = ".,/";
 num2 = "abc";
 num3 = "def";
 num4 = "ghi";
 num5 = "jkl";
 num6 = "mno";
 num7 = "pqrs";
 num8 = "tuv";
 num9 = "wxyz";
 * = *+;
 # = #;

*/
const numbers = ["1.,/", "2abc", "3def", "4ghi", "5jkl", "6mno", "7pqrs", "8tuv", "9wxyz", "**+", "0 ", "##"];

const form = document.getElementById("form");

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();

    const phrase = document.getElementById('phrase').value;
    var converted_text = "";

    for (let phraseLenght = 0; phraseLenght < phrase.length; phraseLenght++) {
        console.log(`Charactere ${phrase[phraseLenght]} = ${convertCharactere(phrase[phraseLenght])} `)
        converted_text += convertCharactere(phrase[phraseLenght]);

    }

    const converted = document.getElementById ("converted-phrase");

    converted.innerHTML = converted_text;
}

function convertCharactere(charactere) {
    var convertedCharcatere = "";
    for (let numbersLenght = 0; numbersLenght < numbers.length; numbersLenght++) {
        for (let numbersCharacteres = 0; numbersCharacteres < numbers[numbersLenght].length; numbersCharacteres++) {
            if (numbers[numbersLenght].includes(charactere)) {
                if (numbers[numbersLenght][numbersCharacteres + 1]  === charactere) {
                    convertedCharcatere += numbers[numbersLenght][0];
                    return convertedCharcatere;

                }
                else{
                    convertedCharcatere += numbers[numbersLenght][0];
                }
            }
        }
    }
}
