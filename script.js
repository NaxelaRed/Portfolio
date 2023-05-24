const loadWidth = window.innerWidth;
var wavery = new Wavery({
    width: loadWidth,
    height: 300,
    segmentCount: loadWidth / 200,
    layerCount: 2,
    variance: 0.8,
    gradientColors: [{
            colorValue: "#680eb7",
            position: 0
        },
        {
            colorValue: "#5360ef",
            position: 1
        }
    ]
});

var svg = wavery.generateSvg();
var element = document.getElementById("svg");
var gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
gradient.setAttribute("id", "line-gradient");
gradient.setAttribute("x1", "0%");
gradient.setAttribute("y1", "0%");
gradient.setAttribute("x2", "100%");
gradient.setAttribute("y2", "0%");
var stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop1.setAttribute("offset", "0%");
stop1.setAttribute("style", "stop-color:#5360ef;stop-opacity:1");
var stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
stop2.setAttribute("offset", "100%");
stop2.setAttribute("style", "stop-color:#680eb7;stop-opacity:1");
gradient.appendChild(stop1);
gradient.appendChild(stop2);
svg.appendChild(gradient);

element.appendChild(svg);
element.getElementsByTagName("path")[0].setAttribute("fill", "url(#line-gradient)");

window.addEventListener('resize', function () {
    element.getElementsByTagName("svg")[0].getElementsByTagName("path")[0].style.transform = 'scaleX(' + (window.innerWidth / (loadWidth - 1)) + ')';
});

function clickMe(image) {
    var video = document.createElement('video');
    video.src = 'https://www.cjoint.com/doc/22_03/LCxr0IDDV8o_rickroll.mp4';
    video.autoplay = true;
    video.loop = true;
    video.classList.add('you-got-rick-rolled');
    video.title = 'Never gonna give you up, never gonna let you down, never gonna run around and desert you.';
    video.style.height = image.height + 'px';
    video.style.aspectRatio = 1;
    video.style.objectFit = 'cover';
    video.style.borderRadius = '50%';
    image.parentNode.replaceChild(video, image);
};
