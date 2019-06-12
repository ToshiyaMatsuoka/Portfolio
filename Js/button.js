window.onload = ()=>{

    let obj = document.querySelector("#backTop");
    obj.addEventListener("click", 
    ()=>{
        scrollTo(0,0);
    }
    );
}
// window.onscroll = ()=>{    
//         // let obj = window.querySelector("body");
// window.addEventListener("scroll",()=>{
//  if(window.scrollY <=0){
//      document.getElementById("backTop").style.animationName="fadeOut"
//     document.getElementById("backTop").style.display="none";
//   }
//   else{ 
//       document.getElementById("backTop").style.animationName="fadeIn"
//     document.getElementById("backTop").style.display="block";
//   }
// });        
// }