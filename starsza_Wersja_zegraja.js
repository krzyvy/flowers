var startDate = new Date(2024, 9, 14, 23).getTime();

var monthnowDate = new Date().getMonth();

function time(){

    var now = new Date().getTime();

    var distance = now - startDate;

    //var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    var days = Math.floor((((distance / 1000) / 60) / 60)/24);
    var hours = Math.floor(((distance / 1000) / 60) / 60);
    var minutes = Math.floor((distance / 1000) / 60);
    var seconds = Math.floor((distance / 1000));
    var weaks = Math.floor(((((distance / 1000) / 60) / 60)/24)/7);

    var month = Math.floor(monthnowDate + 3);
    var day = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);
    //var weak = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));

    
    console.log(monthnowDate + 3)  

    document.getElementById("countdown").innerHTML = "<div class='title'>Tyle zemna wytrzymalas:</div> <div class='item first'>"+month+" miesiące "+day+" dni "+hour+" godzin "+minute+" minut "+second+" sekund "+"</div> <div class='item' style='color: #fff; padding: 0 0 10px 0; font-weight: 600;'> A to jest</div><div class='item'>"+weaks+" tygodnie</div><div class='item'>"+days + " dni </div> " + "<div class='item'>"+ hours + " godziny </div> " + "<div class='item'>"+ minutes + " minuty</div>" + "<div class='item'>"+ seconds + " sekound </div> <div>GRATULACJE!</div>";
}

var x = setInterval(time, 1000);

const one = document.querySelector('#one');
const dwo = document.querySelector('#dwo');

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

sleep(1000).then(() => {
    one.classList.add('displaynone');
});
sleep(1500).then(() => {
    dwo.classList.remove('displaynone');
});
