
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const arrow = document.querySelector('#arrow')

    if (window, pageYOffset > fixedNav) {
        header.classList.add('nav-fixed');
        arrow.classList.add('hidden');
    }
    else {
        header.classList.remove('nav-fixed');
        arrow.classList.remove('hidden');
    }
}


const button = document.querySelector('#button');
const navBar = document.querySelector('nav');
const lang = document.querySelector('#lang');
const lang2 = document.querySelector('#lang2');
const langu = document.querySelector('#langu')
const skill = document.getElementsByClassName('skill')
const desSkill = document.getElementsByClassName('desSkill')


button.addEventListener('click', function () {
    button.classList.toggle('button-acctive');
    navBar.classList.toggle('hidden');

});

lang.addEventListener('click', function () {
    langu.classList.add('hidden');
});


lang2.addEventListener('click', function () {
    langu.classList.remove('hidden');
});

const form = document.querySelector('form');
const name = document.getElementById("name")
const email = document.getElementById("email")
const message = document.getElementById("message")


function sendEmail() {
    const bodyMessage = `Name: ${name.value}<br> Email: ${email.value}<br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "ragilkurniawan364@gmail.com",
        Password: "A46FFAB3A1289063BC3D26784D11B1F90932",
        To: 'ragilkurniawan364@gmail.com',
        From: "ragilkurniawan364@gmail.com",
        Subject: "client",
        Body: bodyMessage
    }).then(
        message => {
            if (message == "OK") {
                Swal.fire({
                    title: "Succes!",
                    text: "Message sent SuccesFully!",
                    icon: "success"
                });
            }
        }
    ).catch(error => {
        Swal.fire({
            title: "Error!",
            text: `Failed to send email: ${error.message}`,
            icon: "error"
        });
    }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    const txtErrors = document.querySelectorAll(".errorTxt");

    for (let i = 0; i < items.length; i++) {
        if (items[i].value.trim() === "") {
            txtErrors[i].classList.remove("hidden");
        } else {
            txtErrors[i].classList.add("hidden");
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();

    const isValid = [...document.querySelectorAll(".item")].every(item => item.value.trim() !== "");
    if (isValid) {
        sendEmail();
    } else {
        Swal.fire({
            title: "Error!",
            text: "Please fill out all fields.",
            icon: "error"
        });
    }
});



