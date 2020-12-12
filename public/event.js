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

let clicked = false;

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

    let alert = document.getElementById('scoreAlert');
    alert.innerHTML = "Score successfully posted!";

    clicked = false;
    viewScores();


}


function viewScores() {
    let ol = document.getElementById('topScores');
    ol.innerHTML = "";

    if (clicked == false) {

        $.get("/viewScores", function (result) {

            for (let i = 0; i < result.length; i++) {
                let li = document.createElement('li');
                console.log(result[i].username);
                li.textContent = result[i].username + ": " + result[i].score;
                ol.appendChild(li);
            }

        })

        clicked = true;
        document.getElementById("viewScoresBtn").innerHTML = "Hide Top Scores";
    } else {
        ol.classList.toggle('hidden');
        document.getElementById("viewScoresBtn").innerHTML = "See Top Scores";



    }

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

                $.get(`/dictionaryCall?answer=${answer}`, function (result) {
                    if (result.includes("error")) {
                        alert = "Not a real word, sneaky pants!";
                    } else {
                        getWord();
                        count++;
                        setScore(count);
                        alert = `Great job: ${answer} is a valid anagram of ${word}. `;
                        document.getElementById('anagram').value = "";
                    }
                    alertDiv.innerHTML = alert;

                })


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