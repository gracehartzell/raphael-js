First, I had to download Raphael using its source code (curl -o raphael.js https://raw.githubusercontent.com/DmitryBaranovskiy/raphael/master/raphael.min.js)

I made an HTML and JS file to practice and linked the both the JS and the Raphael file in the HTML file. 

When drawing in Raphael, you have to do so on a canvas that you make. There are two ways to make the canvas: 1. specify the dimensions of the canvas using the absolute position of the canvas relative to the viewport, or 2. using a container that the canvas is drawn into (the route I chose.)
Basic layout of canvas creation: 
```js
// Method 1: 
let canvas = new Raphael(x, y, width, height);
// Method 2:
let canvas = new Raphael(element, width, height);
```

Building my first Raphael creation: 
    1. Created a canvas on the HTML page for my design to be displayed.
    2. 