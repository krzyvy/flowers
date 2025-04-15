var startDate = new Date(2024, 9, 14, 23).getTime();

var startdayDate = new Date(2024, 9, 14, 23).getDate();
var monthnowDate = new Date().getMonth();
//var daynow = 15;
var daynow = new Date().getDate();
console.log(daynow, monthnowDate);


function time(){
    var day;
    var now = new Date().getTime();

    var distance = now - startDate;


    if(daynow == startdayDate){
        day = 0;
    } else if(daynow > startdayDate){
        day = daynow - startdayDate;
    }else if(daynow < startdayDate){
        if(monthnowDate+1 == 2){
            let y = 28 - startdayDate;
            day = daynow + y;
        }
        if(monthnowDate+1 == 1 || 3 || 5 || 7 || 8 || 10 || 12){
            let y = 31 - startdayDate;
            day = daynow + y;
        }
        if(monthnowDate+1 == 4 || 6 || 9 || 11){
            let y = 30 - startdayDate;
            day = daynow + y;
        }
    }

    //var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365.25));
    var days = Math.floor((((distance / 1000) / 60) / 60)/24);
    var hours = Math.floor(((distance / 1000) / 60) / 60);
    var minutes = Math.floor((distance / 1000) / 60);
    var seconds = Math.floor((distance / 1000));
    var weaks = Math.floor(((((distance / 1000) / 60) / 60)/24)/7);

    var month = Math.floor(monthnowDate + 3);
    //var day = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var second = Math.floor((distance % (1000 * 60)) / 1000);
    //var weak = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24 * 7));

    document.getElementById("countdown").innerHTML = "<div class='title'>Tyle zemna wytrzymalas:</div> <div class='item first'>"+month+" miesiące "+day+" dni "+hour+" godzin "+minute+" minut "+second+" sekund "+"</div> <div class='item' style='color: #fff; padding: 0 0 10px 0; font-weight: 600;'> A to jest</div><div class='item'>"+weaks+" tygodnie</div><div class='item'>"+days + " dni </div> " + "<div class='item'>"+ hours + " godziny </div> " + "<div class='item'>"+ minutes + " minuty</div>" + "<div class='item'>"+ seconds + " sekound </div> <div>GRATULACJE!</div>";
}

var x = setInterval(time, 1000);

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
