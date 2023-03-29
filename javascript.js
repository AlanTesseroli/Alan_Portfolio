// Scroll Reveal

window.sr = ScrollReveal({reset: true})

sr.reveal('.topico > h2', {duration: 2000})

sr.reveal('#imgpl', {duration: 2000, rotate: {x:0 , y:90, z:0}})


// DARK MODE

var body = document.getElementsByName('body')

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

//ABA DE ENVIO DE MENSAGEM AUTOMÁTICA

function sendEmail() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    Email.send({
      SecureToken: "adicionar token seguro",
      To: "meuemail.com",
      From: email,
      Subject: subject,
      Body: "Nome: " + name + "<br>E-mail: " + email + "<br>Mensagem: " + message
    }).then(
      message => alert("E-mail enviado com sucesso!")
    );
  }

