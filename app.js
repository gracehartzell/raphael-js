console.log('Helplessly Hoping');
document.addEventListener('DOMContentLoaded', () => {
    console.log('her harlequin hovers nearby');
    
    
    let paper = new Raphael(document.getElementById('canvas_container'), 500, 500 );

    let circle = paper.circle(100, 100, 80);

    for (let i = 0; i < 9; i++) {
        let multiplier = i*5;
        paper.circle(250 + (5*multiplier), 100 + multiplier, 50 - multiplier);
    }

    circle.attr('fill', '#dedede');





})

// var paper = Raphael(10, 50, 320, 200);
// var circle = paper.circle(50,40,10);
// circle.attr('fill','#f00');