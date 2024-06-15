
const emojis = document.querySelectorAll('.emoji');


const handleMouseEnter = (event) => {
    event.target.style.opacity = '0'; 
};


const handleMouseLeave = (event) => {
    event.target.style.opacity = '1'; 
};


emojis.forEach(emoji => {
    emoji.addEventListener('mouseenter', handleMouseEnter);
    emoji.addEventListener('mouseleave', handleMouseLeave);
});