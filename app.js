
const width = window.innerWidth ;
const height = window.innerHeight;

const wrapper = document.createElement('div');
document.body.appendChild(wrapper);
wrapper.className = 'wrapper';
wrapper.style.width = `${width}px`;
wrapper.style.height = `${height}px`;


for (i = 0; i<10000 ; i++){
        const element = document.createElement('div');
        element.style.width = '22px';
        element.style.height = '22px';
        wrapper.appendChild(element);
        element.className = 'element';
        element.style.zIndex = [i];
}

element.animate([
    {transform: 'translateY(0px) translateX(0px)'},
    {transform: 'translateY(11px) translateX(11px)'}
], {
    duration: 3000,
    iterations: Infinity,
    
});