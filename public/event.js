function getWord() {
    $.get("/newWord", function(result){

        console.log(result);
        let div = document.getElementById('word');
        div.innerHTML = result[0].word;

        let hint = document.getElementById('hint');
        hint.innerHTML = result[0].hint;



    })


}

function getHint(){
    document.getElementById('hint').classList.remove('hidden');

}

