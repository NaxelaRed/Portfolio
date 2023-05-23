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
    element.getElementsByTagName("svg")[0].getElementsByTagName("path")[0].style.transform = 'scaleX(' + (window.innerWidth / (loadWidth - 1)) + ')';
});

function clickMe(image) {
    var video = document.createElement('video');
    video.src = 'https://rr3---sn-ab5sznly.googlevideo.com/videoplayback?expire=1684881067&ei=S-psZKXSEIW68wT7hIK4Cw&ip=181.177.89.166&id=o-AJZo-fegjmwHZgnCR6Br3uliPHM0dcEIK4S3BEXbU0W6&itag=22&source=youtube&requiressl=yes&mh=7c&mm=31%2C26&mn=sn-ab5sznly%2Csn-p5qs7nsr&ms=au%2Conr&mv=u&mvi=3&pl=23&pcm2=no&spc=qEK7B1VZKUx10cZAg6WtERquyvRZwWk&vprv=1&svpuc=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=212.091&lmt=1674233742818000&mt=1684858339&fvip=5&fexp=24007246%2C51000024&c=ANDROID&txp=4532434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cpcm2%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRAIgZCLoF2GIL0802hLA3qK-egQ3jJA0Vta4WoELOfZdYQwCIBqhIe4YEPc0pu8g_X9ViNujQBb7ZcwS50AAsflWI_Xk&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRQIhAIs8-S2CJSLBGpHaY9-9chxEDv6sI9BvaP4qh3y0ooYjAiBG4iP0O6b152Yit4W7D8aRE7QnbxtETuMrMt-8VBwyXA%3D%3D&title=Rick+Astley+-+Never+Gonna+Give+You+Up+%28Official+Music+Video%29';
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
