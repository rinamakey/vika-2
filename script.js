document.querySelector('.burger').addEventListener('click',function(){
    this.classList.toggle('active');
    document.querySelector('nav').classList.toggle('open')
})





function myFunction(smallImg){
    let fullImg=document.getElementById('bigImg')
    fullImg.src=smallImg.src;
}

function myFunctionTwo(smallImgTwo){
    let fullImgTwo=document.getElementById('bigImgTwo')
    fullImgTwo.src=smallImgTwo.src;
}


gsap.from('li',{opacity:0,
    y:10,
    stagger:0.7,
    duration:1,
    delay:0.5})







gsap.from('.text-block__h', {opacity: 0,
    duration:4,
    x: 50,
    delay:0.2
    // scrub:true
})

gsap.from('.text-block__p', {opacity: 0,
    x: 50,
    duration: 5,
    delay: 0.4
    // start:'center',
    // end:820,
    // scrub:true
    })


    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.gsr', {opacity: 0,
        scrollTrigger:{
            trigger:"gsr", 
            toggleActions: "restart none none none"
        },
        x: -50,
        duration: 4,
        start: "20px 80%" ,
        end: "bottom 100px"
        // scrub:true
    })
    
gsap.from('.gs', {opacity: 0,
    scrollTrigger:{
        trigger:"gs", 
        toggleActions:"restart none none none"
      },
    x: 50,
    duration:4,
    start:'center',
    end:820
    // scrub:true
})
gsap.from('.gsa', {opacity: 0,
    scrollTrigger:{
        trigger:"gsa", 
        toggleActions:"restart none none none"
      },
    x: 50,
    duration:4,
    start:'center',
    end:820
    // scrub:true
})


gsap.from('.ava_1',{x: -512, opacity: 0,duration: 2 })

gsap.from('.ava_2',{y: 300, opacity: 0,duration: 2 })

gsap.from('.ava_3',{x: 500, opacity: 0,duration: 2})





gsap.from(".paralaxA ",{ y: 30,
    scrub:true,
    delay: 0.2,
    duration: 2, 
    opacity: 0 })

gsap.from(".exposition ",{ x: -30, delay: 0.5, duration:4, opacity:0 })

gsap.from(".an ",{ y: 30,
    stagger:0.9,
    delay: 0.6,
    duration: 3,
    opacity: 0 })

gsap.from(".one",{ x: 30,  stagger:0.7, delay: 0.6, duration: 5, opacity: 0 })

gsap.from(".fontsca",{ y: 20,  stagger:0.7, delay: 0.3, duration: 5, opacity: 0 })



gsap.from(".animals",{ x: -30, 
    scrollTrigger:{
        trigger:"animals ", 
        toggleActions:"restart  revers  restart none"
    },
    delay: 0.9,
    duration: 4,
    opacity: 0,
    start:'center',
    end:820,
    scrub:true,
 })

gsap.from(".icon",{ x: 10,  stagger:0.7, delay: 0.3, duration: 3, opacity: 0 })

gsap.from(".images",{ y: 40,  stagger:0.8, delay: 0.3, duration: 3, opacity: 0 })

gsap.from(".adres",{ x: 10,  stagger:0.8, delay: 0.10, duration: 3, opacity: 0 })

gsap.from(".hero",{ y: 50,  duration: 5, opacity: 0 })












































