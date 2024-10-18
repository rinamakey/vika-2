document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open')
})

gsap.registerPlugin(ScrollTrigger)

gsap.from('li',{opacity:0,
    y:10,
    stagger:0.7,
    duration:1,
    delay:0.5})



    gsap.from(".exposition ",{ x: -30, delay: 0.5, duration:4, opacity:0 })


    gsap.from(".fontsca",{ y: 20,  stagger:0.7, delay: 0.3, duration: 5, opacity: 0 })

    gsap.from(".paralaxA ",{ y: 30,
        scrub:true,
        delay: 0.2,
        duration: 2, 
        opacity: 0 })

gsap.from(".adres",{ x: 10,  stagger:0.8, delay: 0.10, duration: 3, opacity: 0 })