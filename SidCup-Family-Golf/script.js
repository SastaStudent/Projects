var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove",function(movement){
  cursor.style.left=movement.x+'px';
  cursor.style.top=movement.y+'px';
})

var blur = document.querySelector(".blur");
document.addEventListener("mousemove",function(movement){
  blur.style.left=movement.x-150+'px';
  blur.style.top=movement.y-150+'px';
})














gsap.to("#nav",{
 backgroundColor:"#000",
 height:"110px",
 duration:0.5,
 scrollTrigger:{
  trigger:"#nav",
  scroller:"body",
  // markers:true,
  start:"top -10%",
  end:"top -11%",
  scrub:1
 }
})

gsap.to("#main",{
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scoller:"body",
    markers:true,
    start:"top -30%",
    end:"top -80%",
    scrub:3
  }
})