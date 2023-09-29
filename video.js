const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    mobile_menu.classList.toggle('active')
})

document.addEventListener('scroll',()=>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250) {
        header.style.backgroundColor = 'rgb(20 29 34)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
} )

const navLinks = document.querySelectorAll('.nav-list ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        hamburger.classList.remove('active');
        mobile_menu.classList.remove('active');
    });
});


const nextVideoIcon = document.getElementById('next-video-icon');
const videoPlayer = document.getElementById('video-player');
const videoList = document.getElementById('video-list');

let currentVideoIndex = 0;
const videoSources = Array.from(videoList.getElementsByTagName('a'));

// Function to play the next video
function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
    playVideo(currentVideoIndex);
}

// Add a click event listener to the next video icon
nextVideoIcon.addEventListener('click', playNextVideo);

// Rest of the code (as previously provided)
function playVideo(index) {
    if (index >= 0 && index < videoSources.length) {
        videoPlayer.src = videoSources[index].getAttribute('href');
        videoPlayer.load();
        videoPlayer.play();
        currentVideoIndex = index;
    }
}

// // Show the "Next Video" icon
// document.getElementById('next-video-icon').style.display = 'block';

// // Show the "Next Video" element
// document.getElementById('next-video').style.display = 'block';

// // Hide the "Next Video" icon
// document.getElementById('next-video-icon').style.display = 'none';

// // Hide the "Next Video" element
// document.getElementById('next-video').style.display = 'none';

// Play the first video on page load
playVideo(currentVideoIndex);