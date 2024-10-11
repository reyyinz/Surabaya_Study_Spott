Array.from(document.getElementsByTagName('input')).forEach((e , i)=>{
    e.addEventListener('keyup', (el)=>{
        if (e.value.length > 0) {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(180deg)";
        } else {
            document.getElementsByClassName('bi-caret-down-fill')[i].style.transform = "rotate(0deg)";
        }
    })
})

const modalContainer = document.querySelector(".modal-container"), 
modalLogin=document.getElementById("modalLogin"), 
Create = document.getElementById("Create"),
login = document.getElementById("login"),
LoginHere = document.getElementById ("LoginHere"),
LoginForm = document.querySelector(".login"),
registrationForm = document.querySelector(".registration")

modalLogin.onclick=()=>{
   modalContainer.classList.add("open");
};

function closeModalContainer(){
    modalContainer.classList.remove("open");
};

Create.onclick=()=>{
    LoginForm.setAttribute("style","transform:translate(-500px);");
    registrationForm.setAttribute("style","transform:translate(0);");
};

LoginHere.onclick=()=>{
    LoginForm.removeAttribute("style;");
    registrationForm.removeAttribute("style;");
};

document.getElementById("searchNowBtn").addEventListener('click', function() {
    window.location.href = "StudySpot.html";
});
document.addEventListener("DOMContentLoaded", function() {
    const catalogItems = document.querySelectorAll('.catalog-item');
    catalogItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
    });

    setTimeout(() => {
        catalogItems.forEach(item => {
            item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        });
    }, 100);
});
