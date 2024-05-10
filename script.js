//eak rectangle banao and jab woh mouse center par ho to
// rectangle center par ho, jab mouse left jana shuru ho  jae
// rectangle bhi left jana shuru hojaaye, par jaise jaise 
//mouse left jaaye rectangle ki speed left mein jaate jaate slow hojaaye
//same happens with right side as well.

var rect = document.querySelector(".rectangle");

window.addEventListener("mousemove", function(details){

    var xval = gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2, window.innerWidth-(100+rect.getBoundingClientRect().width/2), details.clientX);





    gsap.to(".rectangle",{
        left: xval + "px",
        ease: Power3,
    });
});