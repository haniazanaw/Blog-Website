
function likeBook(btn) {
    var heart = btn.querySelector('.heart');
    var count = btn.querySelector('.like-count');
    let liked = btn.classList.toggle('liked');
    heart.textContent = liked ? '❤️' : '♡';
    let current = parseInt(count.textContent, 10);
    count.textContent = liked ? current + 1 : current - 1;
}


document.addEventListener('DOMContentLoaded', function() {
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px"
    };
    const appearOnScroll = new IntersectionObserver(function(entries, observer){
        entries.forEach(entry => {
            if(!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});





document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
});