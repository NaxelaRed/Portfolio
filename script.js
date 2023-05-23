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
element.appendChild(svg);
element.getElementsByTagName("path")[0].setAttribute("fill", "url(#line-gradient)");

window.addEventListener('resize', function () {
    element.getElementsByTagName("svg")[0].getElementsByTagName("path")[0].style.transform = 'scaleX(' + (window.innerWidth / loadWidth) + ')';
});

function clickMe(image) {
    var video = document.createElement('video');
    video.src = 'http://naxelared.flippad.eu/wp-content/uploads/2022/05/Rick-Astley-Never-Gonna-Give-You-Up-Official-Music-Video.mp4';
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