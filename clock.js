var countdownDate = new Date(2024, 9, 14, 16).getTime();
var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = now - countdownDate;

    //var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
    var mount = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.436875));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "<div class='title'>Tyle zemna wytrzymalas:</div> <div>roku jeszcze nie wytrzymalas</div> <div>"+ mount+" miesiace</div>"+  "<div>"+days + " dni </div> " + "<div>"+ hours + " godzin </div> " + "<div>"+ minutes + " minut</div>" + "<div>"+ seconds + " sekund </div> <div>GRATULACJE!</div>";
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
