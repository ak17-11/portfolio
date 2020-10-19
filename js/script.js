const htmlBar=document.querySelector('.bar-html')
const cssBar=document.querySelector('.bar-css')
const jsBar=document.querySelector('.bar-javascript')
const cppBar=document.querySelector('.bar-cpp')
const javaBar=document.querySelector('.bar-java')

var t1=new TimelineLite();

t1.fromTo(htmlBar, .75, {width: 'calc(0% - 6px)' },{width: 'calc(90% - 6px)', ease: Power4.easeOut})
   .fromTo(cssBar, .75, {width: 'calc(0% - 6px)' },{width: 'calc(85% - 6px)',  ease: Power4.easeOut})
   .fromTo(jsBar, .75, {width: 'calc(0% - 6px)' }, {width: 'calc(80% - 6px)', ease: Power4.easeOut})
   .fromTo(cppBar, .75, {width: 'calc(0% - 6px)' }, {width: 'calc(90% - 6px)', ease: Power4.easeOut})
   .fromTo(javaBar, .75, {width: 'calc(0% - 6px)' }, {width: 'calc(86% - 6px)', ease: Power4.easeOut}) 

const controller=new ScrollMagic.Contoller()
const scene = new ScrolMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
.setTween(t1)
.addTo(controller)

