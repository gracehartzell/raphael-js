console.log('Helplessly Hoping');

document.addEventListener('DOMContentLoaded', () => {
    console.log('her harlequin hovers nearby');
    
/***********************************************************************
****************** BASIC SHAPES ***************************************
***********************************************************************/

    let paper = new Raphael(document.getElementById('canvas_container'), 500, 500 );

    let circle = paper.circle(100, 100, 80);

    for (let i = 0; i < 9; i++) {
        let multiplier = i * 2; // distance between circles 
        paper.circle(250 + (7 * multiplier), 150 + multiplier, 50 - multiplier);
    }

    circle.attr('fill', '#dedede');

    // Ellipses: required params: center x, center y, horizontal radius, vertical radius, e.g. ellipse(cx, cy, hrad, vrad):
    let ellipse = paper.ellipse(100, 100, 80, 40);
    ellipse.attr('fill', '#3b978d');
    let ellipse2 = paper.ellipse(100, 100, 30, 80 );
    ellipse2.attr({
        'fill': '#41a59b',
        'fill-opacity': 0.4
    });
    



/***********************************************************************
******************CREATING PATHS ***************************************
***********************************************************************/

    let canvas3 = new Raphael(document.getElementById('canvas3'), 500, 500);
    
    let rectPath = canvas3.path('M10, 10LI20,150L90,80Z'); // M(coordinates) moves pen to that position, L(coordinates) draws a line from current position (M) to new position (L). s draws smooth Bezier curve with given control point and endpoint. Z closes the path. Uppercase for absolute coordinates, lowercase for relative.
    let curvePath = canvas3.path("M110,40s55, 09 40, 80Z");
    rectPath.attr('fill', 'blue');
    curvePath.attr('fill','red');

    var t = canvas3.path('M100 100L150 150L100 300L100 100').attr({
        'stroke': 'olivedrab', 
        'fill': 'blanchedalmond',
        'fill-opacity': 0.2,
        'stroke-width': 15,
        'stroke-opacity': 0.7,
        'stroke-linecap': 'round',
        'stroke-linejoin': 'round'
    });

})
