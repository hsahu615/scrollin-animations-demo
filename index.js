import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const scrollTracker = document.querySelector('.scroll-tracker');

const scrollTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: 'block',
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

scrollTracker.animate({
    transform: ['scaleX(0)', 'scaleX(1)']
},
{
    duration: 1,
    timeline: scrollTimeline
}
)


window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        console.log('windowHeight: ', windowHeight);
        console.log('revealTop: ', revealTop);
        var revealPoint = 150;
        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        } 
        if(revealTop < (-1)*200) {
            reveals[i].classList.remove('active');
        }
    }
}