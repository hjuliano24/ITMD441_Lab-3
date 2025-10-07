
function countVowels (word) {
    var count = 0;
    for (let i = 0; i < word.length; i++){
        if (word[i] === 'a'){
            count ++;
        }
        if (word[i] === 'e'){
            count ++;
        }
        if (word[i] === 'i'){
            count ++;
        }
        if (word[i] === 'o'){
            count ++;
        }
        if (word[i] === 'u'){
            count ++;
        }
    }
    console.log(`${word}: ${count} vowels \n`);
}

countVowels("invocation");
countVowels("sound");
countVowels("splendiful");

/*
Output: 
invocation: 5 vowels 
sound: 2 vowels 
splendiful: 3 vowels 
*/
