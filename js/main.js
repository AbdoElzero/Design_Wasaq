function increaseValue() {
    var field = document.querySelector('.box .one .count .field');
    var currentValue = parseInt(field.value);
    field.value = currentValue + 1;
}

function decreaseValue() {
    var field = document.querySelector('.box .one .count .field');
    var currentValue = parseInt(field.value);
    // Ensure the value doesn't go below 1
    field.value = currentValue > 1 ? currentValue - 1 : 1;
}



const randomBack = document.querySelectorAll(".box .end .num ul li");

randomBack.forEach(a => {

    a.addEventListener("click", (e) => {

        handleActive(e)

    })

});

function handleActive(ev) {

    // Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
  
      element.classList.remove("active");
  
    });
     // Add Active Class On Self
  ev.target.classList.add("active");

};

// Craeta Popup With The Image
let btn = document.querySelector(".box-four .form .btn")


  btn.onclick = function () {
    
    let overlay = document.createElement("div");
    // Creata Overlay Element
    overlay.className = "popup-overlay";
    
    document.body.appendChild(overlay);
    
    // Craeta The Popup Box 
    let popupBox = document.createElement("div");
    
    popupBox.className = "popup-box";
    
    let heading = document.createElement("h3");
    heading.className = "headone"

    heading.textContent = "تلقينا طلبك بنجاح "
    
    popupBox.appendChild(heading)

    let span = document.createElement("p");
    span.className = "span"

    span.textContent = "لن تنتظر كثيراً، وسنتواصل معك وفق الطريقة التي اخترتها في أقرب فرصة!"
    
    popupBox.appendChild(span)

    let button = document.createElement("button");
    button.className = "button"

    button.textContent = "تم"
    
    popupBox.appendChild(button)

    document.body.appendChild(popupBox);

    // Creata The Cloes Span 
    let cloesButton = document.createElement("span");

    let cloesButtonText = document.createTextNode("X");

    cloesButton.appendChild(cloesButtonText);

    cloesButton.className = "cloes-button";

    popupBox.appendChild(cloesButton)


  }

// Close Popup 
document.addEventListener("click", function (e) {

  if (e.target.className == 'cloes-button') {
    e.target.parentNode.remove()

    document.querySelector('.popup-overlay').remove()
  }

  if (e.target.className == 'button') {
    e.target.parentNode.remove()

    document.querySelector('.popup-overlay').remove()
  }
});