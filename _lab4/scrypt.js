let pin1 = anime({
    targets: '.pin1',
    easing: 'linear',
    rotate: '1turn',
    loop: true,
    endDelay: 5500,
})

let pin2 = anime ({
    targets: '.pin2',
    translateY: -100,
    delay: 5100,
    loop: true,
    duration: 1500

})

let trtl = anime({
    targets: '.trtl',
    translateX: 270,
    direction: 'reverse',
    loop: true,
    easing: 'easeInOutSine',
    duration: 2000
  });
  

document.querySelector('#play').onclick = trtl.play;
document.querySelector('#pause').onclick = trtl.pause;