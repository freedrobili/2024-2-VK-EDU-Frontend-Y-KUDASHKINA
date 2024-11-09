/*
For the input of your function, you will be given one sentence.
You have to return a corrected version,
that starts with a capital letter and ends with a period (dot).

Example:

input (string): "hey, friend"
output (string): "Hey, friend."

Updated first 'h' to 'H', added '.'.

More examples:

correctSentence("greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends") == "Greetings, friends."
correctSentence("Greetings, friends.") == "Greetings, friends."
 */

function correctSentence(text) {
    if (text === '') return '';

    const capitalizedText = text.charAt(0).toUpperCase() + text.slice(1);

    if (capitalizedText.charAt(capitalizedText.length - 1) !== '.'){
        return capitalizedText + '.';
    }

    return capitalizedText;
}


export default correctSentence;

// console.log(correctSentence("greetings, friends")); // "Greetings, friends."
// console.log(correctSentence("Greetings, friends")); // "Greetings, friends."
// console.log(correctSentence("Greetings, friends.")); // "Greetings, friends."