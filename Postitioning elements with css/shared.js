var backdrop=document.querySelector(".backdrop");
var selectbuttons=document.querySelectorAll(".plan button");
var modal=document.querySelector(".modal");
var nomodalbutton=document.querySelector(".modal__action-no");
var togglebutton=document.querySelector(".toggle-button");
var mobilenavigation=document.querySelector(".mobile-nav");
const ctaCard=document.querySelector(".main-nav__item--cta");

for(var i=0;i<selectbuttons.length;i++){
    selectbuttons[i].addEventListener('click',function(){
        
        modal.classList.add("open");
        backdrop.style.display="block";
        setTimeout(function(){ 
            backdrop.classList.add("open");
        },10)
    })
};
if(nomodalbutton){
    nomodalbutton.addEventListener("click",closeModal);
}


backdrop.addEventListener("click",function(){
    mobilenavigation.classList.remove("open");
    closeModal()
});

function closeModal() {
    if(modal){
        modal.classList.remove("open");
    }   backdrop.classList.remove("open");
      
        setTimeout(function(){ 
            backdrop.style.display="none";
        },200);
}
togglebutton.addEventListener("click",function(){
    mobilenavigation.classList.add("open");
    backdrop.style.display="block";
    setTimeout(function(){ 
        backdrop.classList.add("open");
    },10)
   });


   ctaCard.addEventListener("animationstart",function(event){
       console.log("Animation Started",event);
   })
   ctaCard.addEventListener("animationend",function(event){
    console.log("Animation Ended",event);
})
ctaCard.addEventListener("animationiteration",function(event){
    console.log("Animation Iteration",event);
})

