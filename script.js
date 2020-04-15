TweenMax.set("#wave1, #wave3, #wave5", {
  visibility: "visible"
});

const sun = () => {
  let tl = new TimelineMax();
  tl.add("s");
  tl.to(
    ".sun",
    5,
    {
      transformOrigin: "50% bottom",
      scale: 1,
      autoAlpha: 1,
      y: 5,
      ease: SlowMo.ease.config(0.3, 0.1, false)
    },
    "s"
  );
  return tl;
};

const ease = Power1.easeOut;

const wave = (item1, time, item2) => {
  let tl = new TimelineMax();
  tl.add("s");
  tl.to(item1, time, {
    morphSVG: item2,
    transformOrigin: " bottom",
    ease: ease,
    yoyo: true,
    repeat: 1,
    scaleY: 0,
    opacity: 1
  });
  return tl;
};

const master = new TimelineMax();
master.timeScale(1.8);
master
  .add("start")
  //change wave# 1-6 on item2 to see new wave shape
  // change the number value if you want to speed up or slow down the waves. It is in seconds
  .add(wave("#wave1", 15, "#wave3"), "start")
  .add(wave("#wave3", 15, "#wave4"), "start")
  .add(wave("#wave5", 15, "#wave6"), "start")
  .add(sun(), "start+=1");

//section 2 animations

const path = MorphSVGPlugin.pathDataToBezier("#motionPath", {
  align: ".plane"
});
TweenMax.to(".ray", 5, {
  transformOrigin: "left center",
  rotation: -15,
  yoyo: true,
  repeat: -1,
  ease: Power0.easeNone
});

let tl = new TimelineMax();
tl.staggerTo(
  ".plane",
  8,
  {
    bezier: {
      values: path,
      type: "cubic",
      autoRotate: true
    },
    ease: SlowMo.ease.config(0.3, 0.1, false),
    repeat: -1
  },
  0.5
);