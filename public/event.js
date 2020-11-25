function getWord() {
    let hint = document.getElementById('hint');

    if (!hint.classList.contains('hidden')) {
        hint.classList.add('hidden');
    }

    $.get("/newWord", function (result) {

        console.log(result);
        let div = document.getElementById('word');
        div.innerHTML = result[0].word;

        let hint = document.getElementById('hint');
        hint.innerHTML = result[0].hint;

    })


}

function getHint() {
    document.getElementById('hint').classList.toggle('hidden');

}

function checkAnagram() {
    let answer = document.getElementById('anagram').value;
    let word = document.getElementById('word').innerHTML;

    let alert = "";
    let alertDiv = document.getElementById('alert');

    if (answer == word) {
        alert = "Same word, loser";
    } else {

        let wordArray = word.split('');
        let answerArray = answer.split('');



        if (wordArray.length != answerArray.length) {
            alert = "Try again!";
        } else {

            wordArray.sort();
            answerArray.sort();

            let finalWord = wordArray.join();
            let finalAnswer = answerArray.join();

            if (finalWord != finalAnswer) {
                alert = "Try again!"
            } else {
                alert = "Great job!"
            }
        }
    }

        alertDiv.innerHTML = alert;


    
}