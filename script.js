window.addEventListener('DOMContentLoaded', () => {
    const blob = document.getElementById('blob');

    document.body.onpointermove= event =>{
        const{clientX, clientY} = event;

        blob.animate({
            left : `${clientX}px`,
            top: `${clientY}px`}, {duration:3000, fill:"forwards"})
    }


    const wrapper = document.getElementById('wrapper');
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

    const combinations = [
        { configuration: 1, roundness: 1 },
        { configuration: 1, roundness: 2 },
        { configuration: 1, roundness: 3 },
        { configuration: 2, roundness: 1 },
        { configuration: 2, roundness: 3 },
        { configuration: 2, roundness: 2 }
    ];

    setInterval(() => {
        const index = rand(0, combinations.length - 1);
        const combination = combinations[index];

        wrapper.dataset.configuration = combination.configuration;
        wrapper.dataset.roundness = combination.roundness;
    },1500);
});
function redirectToBlog() {
    window.location.href = "https://melancholy-mornings.netlify.app/";

}

function redirectToBreakOut() {
    window.location.href = "https://algorythmic.netlify.app/";
}

function redirectToGithub(){
    window.location.href = "https://bravesunset.netlify.app/";
}

function redirectToMelancholic(){
    window.location.href = "https://egm-nigeria.netlify.app/events";
}

$(".move-area").mousemove(function(event) {
    var eye = $(".eye");
    console.log('eye', eye)
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
      '-webkit-transform': 'rotate(' + rot + 'deg)',
      '-moz-transform': 'rotate(' + rot + 'deg)',
      '-ms-transform': 'rotate(' + rot + 'deg)',
      'transform': 'rotate(' + rot + 'deg)'
    });
  });
