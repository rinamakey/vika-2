document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open')
})



gsap.from(".icon",{ x: 10,  stagger:0.7, delay: 0.3, duration: 3, opacity: 0 })





