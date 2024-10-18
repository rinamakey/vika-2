document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open')
})


gsap.from('li',{opacity:0,
    y:10,
    stagger:0.7,
    duration:1,
    delay:0.5
})


    gsap.from(".hero",{ y: 50,  duration: 5, opacity: 0 })




gsap.from('.text-block__h', {opacity: 0,
    duration:4,
    x: 50,
    delay:0.2
    
})

gsap.from('.text-block__p', {opacity: 0,
    x: 50,
    duration: 5,
    delay: 0.4
   
    })


    gsap.registerPlugin(ScrollTrigger)
    gsap.from('.gsr', {opacity: 0,
        x: -50,
        duration: 4
   
    })
    
gsap.from('.gs', {opacity: 0,
    x: 50,
    duration:4,
    
})
gsap.from('.gsa', {opacity: 0,
    x: 50,
    duration:4
   
})



















































