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


gsap.registerPlugin(ScrollTrigger)



gsap.from('li',{opacity:0,
    y:10,
    stagger:0.7,
    duration:1,
    delay:0.5})



gsap.from('.ava_1',{x: -512, opacity: 0,duration: 2 })

gsap.from('.ava_2',{y: 300, opacity: 0,duration: 2 })

gsap.from('.ava_3',{x: 500, opacity: 0,duration: 2})

