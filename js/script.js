const htmlBar=document.querySelector('.bar-html')  //selecting the bar-html class
const cssBar=document.querySelector('.bar-css')    //selecting the bar-css class
const jsBar=document.querySelector('.bar-javascript')    //selecting the bar-javascript class
const cppBar=document.querySelector('.bar-cpp')     //selecting the bar-cpp class
const javaBar=document.querySelector('.bar-java')    //selecting the bar-java class

var t1=new TimelineLite();   //object of timelieLite()

//fills the progress bar upto a certain percentage specified in the respective bars
t1.fromTo(htmlBar, .75, {width: 'calc(0% - 6px)' },{width: 'calc(90% - 6px)', ease: Power4.easeOut})    
   .fromTo(cssBar, .75, {width: 'calc(0% - 6px)' },{width: 'calc(85% - 6px)',  ease: Power4.easeOut})
   .fromTo(jsBar, .75, {width: 'calc(0% - 6px)' }, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
   .fromTo(cppBar, .75, {width: 'calc(0% - 6px)' }, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
   .fromTo(javaBar, .75, {width: 'calc(0% - 6px)' }, {width: 'calc(86% - 6px)', ease: Power4.easeOut}) 

const controller=new ScrollMagic.Contoller()
const scene = new ScrolMagic.Scene({
    triggerElement: '.skills',     //triggers when the scroll bar reaches the skills class
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

