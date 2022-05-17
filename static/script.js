$("#input").focus();
var all_words = $("#all-words").text().replace(/'/g, "").replace(/ /g, "").split(",");
var letters = $(".letter");
var i = 0;
var word_num = 0;
var total_letters = 0;
var current_letter = $(`.letter:eq( ${i} )`);
var current_word = $("#current-word")
var running = false;

/*clock*/


var timer = $("#timer");

x = 61
function Countdown(){
    running = true;
    x = x-1;
    timer.text(`${x}`);
    if (x==0){
    current_word.remove();
    timer.text("Results");
    var results = $("#results");
    wpm = word_num;
    lpm = total_letters + i;
    results.append(`<p style="font-size:clamp(3rem, 10rem, 6vw);font-family: 'Roboto', sans-serif;">Words per minute : ${wpm}</p>`);
    results.append(`<p style="font-size:clamp(3rem, 10rem, 6vw);font-family: 'Roboto', sans-serif;">Symbols per minute: ${lpm}</p>`);
    results.append(`<p style="font-size:clamp(3rem, 10rem, 6vw);font-family: 'Roboto', sans-serif;">Words per second : ${(wpm/60).toFixed(2)}</p>`);
    results.append(`<p style="font-size:clamp(3rem, 10rem, 6vw);font-family: 'Roboto', sans-serif;">Symbols per second: ${(lpm/60).toFixed(2)}</p>`);
    return;
    }
    setTimeout(Countdown, 1000);
}


$(document).on("keydown", function (e) {
    if (running == false){
    Countdown();
    }
    var key = String.fromCharCode(e.which).toLowerCase();
    if (key == current_letter.text()){
    current_letter.css("background-color","#4CAF50")
    current_letter.css("color","white")
    if (i<letters.length-1){
    i = i + 1;
    current_letter = $(`.letter:eq( ${i} )`);
    }
    else{
    total_letters = total_letters + letters.length;
    word_num = word_num + 1;
    letters.remove();
    for (letter in all_words[word_num]){
    current_word.append(`<span class="letter">${all_words[word_num][letter]}</span>`)

    i = 0;                                    }
    letters = $(".letter");
    current_letter = $(`.letter:eq( ${i} )`);

    }
    }


});