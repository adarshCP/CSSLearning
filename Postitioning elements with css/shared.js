var backdrop=document.querySelector(".backdrop");
var selectbuttons=document.querySelectorAll(".plan button");
var modal=document.querySelector(".modal");
var nomodalbutton=document.querySelector(".modal__action-no");
var togglebutton=document.querySelector(".toggle-button");
var mobilenavigation=document.querySelector(".mobile-nav")

for(var i=0;i<selectbuttons.length;i++){
    selectbuttons[i].addEventListener('click',function(){
        
        modal.classList.add("open");
        backdrop.classList.add("open");
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
    }
       
        backdrop.classList.remove("open");
}
togglebutton.addEventListener("click",function(){
    mobilenavigation.classList.add("open");
    backdrop.classList.add("open")});
