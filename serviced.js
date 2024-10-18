document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open')
})

gsap.from('li',{opacity:0,
    y:10,
    stagger:0.7,
    duration:1,
    delay:0.5})





gsap.from(".images",{ y: 40,  stagger:0.8, delay: 0.3, duration: 3, opacity: 0 })

gsap.from(".adres",{ x: 10,  stagger:0.8, delay: 0.10, duration: 3, opacity: 0 })

