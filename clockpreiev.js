var countdownDate = new Date(2024, 9, 14, 24).getTime();
var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = now - countdownDate;

    //var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    var mount = Math.floor((distance % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
    var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var weaks = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));

    document.getElementById("countdown").innerHTML = "<div class='title'>Tyle zemna wytrzymalas:</div> <div class='item'>roku jeszcze nie wytrzymalas</div> <div class='item'>"+ mount+" miesiace</div><div class='item'>"+weaks+" tygodnie</div><div class='item'>"+days+ " dni </div> " + "<div class='item'>"+ hours + " godziny </div> " + "<div class='item'>"+ minutes + " minuty</div>" + "<div class='item'>"+ seconds + " sekound </div> <div>GRATULACJE!</div>";
}, 1000);

const one = document.querySelector('#one');
const dwo = document.querySelector('#dwo');

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(7000).then(() => {
    one.classList.add('displaynone');
});
sleep(7500).then(() => {
    dwo.classList.remove('displaynone');
});
