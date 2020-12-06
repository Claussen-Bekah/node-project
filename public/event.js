function getWord() {
    let hint = document.getElementById('hint');

    let alertDiv = document.getElementById('alert');
    alertDiv.innerHTML = "";


    if (!hint.classList.contains('hidden')) {
        hint.classList.add('hidden');
    }

    $.get("/newWord", function (result) {

        let div = document.getElementById('word');
        div.innerHTML = result[0].word;

        hint.innerHTML = result[0].hint;

    })


}

function postScore() {
    let username = $("#username").val();
    let score = $("#count").html();

    let params = {
        username: username,
        score: score
    };

    $.post({
        traditional: true,
        url: '/postScore',
        contentType: 'application/json',
        data: JSON.stringify(params),
        dataType: 'json',
        success: function (response) {
            console.log(response);
        }
    });

}

function viewScores() {
    let ul = document.getElementById('topScores');


        $.get("/viewScores", function (result) {

            console.log(result);

            for (let i = 0; i <= 10; i++) {
                let li = document.createElement('li');
                li.textContent = result[i].username + ": " + result[i].score;
                ul.appendChild(li);
            }

        })
    
    
}

function getHint() {
    document.getElementById('hint').classList.toggle('hidden');
}



let count = 0;

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
                let div = document.getElementById('word');
                div.innerHTML = "";
                count++;
                setScore(count);
                alert = "Great job!"
            }
        }
    }

    alertDiv.innerHTML = alert;



    if (!hint.classList.contains('hidden')) {
        hint.classList.add('hidden');
    }




}

function setScore(count) {

    let countP = document.getElementById('count');

    countP.innerHTML = count;





}

//post top scores
//clean inputs
//post
//get top scores
//change css layout