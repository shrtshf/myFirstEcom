"use strict";
let modal = document.querySelector(".navMobileModal");
let timeOutWelcomeModal = document.querySelector(".welcomeModal");
let modalContent = document.querySelector(".navMobileModal .menuContent");

mobileModalClose();
mobileModalOpen();
clickOpenCaret();
openTimeoutWelcomeBanner();
closeTimeoutWelcomeBanner();


function closeTimeoutWelcomeBanner(){

    let closeButton = document.querySelector(".welcomeModal .welcomeModalClose");
    closeButton.addEventListener("click", function(e){
        timeOutWelcomeModal.click();
    });

   timeOutWelcomeModal.addEventListener("click", function(e){
        if(e.target === e.currentTarget){
            timeOutWelcomeModal.classList.remove("active");
        }
   });
}

function openTimeoutWelcomeBanner(){
     setTimeout(() => {
            timeOutWelcomeModal.classList.add("active");
     }, 5000);
}

function clickOpenCaret(){
     let caretOpener = document.querySelectorAll(".clickOpenCaret");
     for(let i = 0; i<caretOpener.length; i++){
         caretOpener[i].addEventListener("click", function(e){
              this.parentNode.querySelector(".closeCaret").classList.toggle("active");
              this.classList.toggle("rotateArrow");
              e.stopImmediatePropagation();
         });
      
     }
}

function mobileModalOpen(){
    let burgerButton = document.querySelector(".burger");
    burgerButton.addEventListener("click", function(e){
        // modal.style.display = "block";
        modal.classList.add("active")
        modalContent.classList.add("slideRight");
    });
}


function mobileModalClose(){
    
    modal.addEventListener("click", function(e){
          if(e.target === modal){
            //    modal.style.display = "none";
            modal.classList.remove("active");
               modalContent.classList.remove("slideRight");
          }
          e.stopPropagation();
        
    });
}

