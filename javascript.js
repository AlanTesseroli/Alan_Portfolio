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

document.getElementById("my-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Previne que a página recarregue
    
    const to = "alangamer2201@gmail.com";
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("body").value;
    
    window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
  });

  function mudouTamanho(){
    if (window.innerWidth >= 750){
        itens.style.display = "block"
    }
    else{
        itens.style.display = "none"
    }
}


function clickMenu(){
    if (itens.style.display == "block"){
        itens.style.display = "none"
    }
    else{
    itens.style.display = "block"
    }
}