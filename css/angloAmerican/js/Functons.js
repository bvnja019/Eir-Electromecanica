// Función para actualizar el texto de tapas
function updateText() {
    const newText = document.getElementById('new-text').value;
    document.getElementById('shared-text').querySelector('p').innerText = newText;
    localStorage.setItem('sharedText', newText);
    Swal.fire({
        title: "Fecha Registrada con exito",
        text: "Pronto se vera reflejada en todos los usuarios",
        icon: "success"
    })
}

// Función para actualizar el texto de Balanceo
function updateSecondText() {
    const newText = document.getElementById('segundo-texto').value;
    document.getElementById('segunda-fecha').querySelector('p').innerText = newText;
    localStorage.setItem('secondText', newText);
}

// Función para actualizar el texto de Rodamientos
function updateThirdText() {
    const newText = document.getElementById('tercer-texto').value;
    document.getElementById('tercera-fecha').querySelector('p').innerText = newText;
    localStorage.setItem('thirdText', newText);
}

// Función para actualizar el texto de Carcasa
function updateFourthText() {
    const newText = document.getElementById('cuarto-texto').value;
    document.getElementById('cuarta-fecha').querySelector('p').innerText = newText;
    localStorage.setItem('fourthText', newText);
}

// Función para actualizar el texto de Cubre Ventilador
function updateFifthText() {
    const newText = document.getElementById('quinto-texto').value;
    document.getElementById('quinta-fecha').querySelector('p').innerText = newText;
    localStorage.setItem('fifthText', newText);
}

// Función para actualizar el texto de Bobinado
function updateSixthText() {
    const newText = document.getElementById('sexto-texto').value;
    document.getElementById('sexta-fecha').querySelector('p').innerText = newText;
    localStorage.setItem('sixthText', newText);
}

// Función para actualizar el texto de Eje
function updateSeventhText() {
    const newText = document.getElementById('septimo-texto').value;
    document.getElementById('septima-fecha').querySelector('p').innerText = newText;
    localStorage.setItem('seventhText', newText);
}

// Función para actualizar el texto de Pruebas Electricas
function updateEighthText() {
    const newText = document.getElementById('octavo-texto').value;
    document.getElementById('octava-fecha').querySelector('p').innerText = newText;
    localStorage.setItem('eighthText', newText);
}
// Funcion fecha Bobinado
function updateDateBobinado() {
    const newText = document.getElementById('new-text-bobinado').value;
    document.getElementById('fecha-bobinado').querySelector('p').innerText = newText;
    localStorage.setItem('ninethText', newText);
    Swal.fire({
        title: "Fecha Registrada con exito",
        text: "Pronto se vera reflejado los cambios",
        icon: "success"
    })
}

// Cargar textos guardados al cargar la página
function loadText() {
    const savedText = localStorage.getItem('sharedText');
    if (savedText) {
        document.getElementById('shared-text').querySelector('p').innerText = savedText;
    }

    const savedSecondText = localStorage.getItem('secondText');
    if (savedSecondText) {
        document.getElementById('segunda-fecha').querySelector('p').innerText = savedSecondText;
    }

    const savedThirdText = localStorage.getItem('thirdText');
    if (savedThirdText) {
        document.getElementById('tercera-fecha').querySelector('p').innerText = savedThirdText;
    }

    const savedFourthText = localStorage.getItem('fourthText');
    if (savedFourthText) {
        document.getElementById('cuarta-fecha').querySelector('p').innerText = savedFourthText;
    }

    const savedFifthText = localStorage.getItem('fifthText');
    if (savedFifthText) {
        document.getElementById('quinta-fecha').querySelector('p').innerText = savedFifthText;
    }

    const savedSixthText = localStorage.getItem('sixthText');
    if (savedSixthText) {
        document.getElementById('sexta-fecha').querySelector('p').innerText = savedSixthText;
    }

    const savedSeventhText = localStorage.getItem('seventhText');
    if (savedSeventhText) {
        document.getElementById('septima-fecha').querySelector('p').innerText = savedSeventhText;
    }

    const savedEighthText = localStorage.getItem('eighthText');
    if (savedEighthText) {
        document.getElementById('octava-fecha').querySelector('p').innerText = savedEighthText;
    }
    const savedNinethText = localStorage.getItem('ninethText');
    if (savedEighthText) {
        document.getElementById('fecha-bobinado').querySelector('p').innerText = savedEighthText;
    }
}

// Cargar todos los textos cuando se carga la página
window.onload = function() {
    loadText();
};



function valida(){
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    if(email === 'angloAmerican@eir.cl' && pass === 'angloAmerican1'){
        Swal.fire({
            title: "Se ha Verificado correctamente el usuario",
            text: "Oprima el botón para continuar",
            icon: "success"
        }).then(() => {
            window.location.href = 'views/Angloamerican/home.html';
        });
    }else if(email != 'angloAmerican@eir.cl' && pass != 'angloAmerican1'){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario o contraseña invalida",
        });
    }else if(email === "victor.Valenzuela@eir.cl" && pass === "victorValenzuela1"){
        Swal.fire({
            title: "Se ha Verificado correctamente el usuario",
            text: "Oprima el botón para continuar",
            icon: "success"
        }).then(() => {
            window.location.href = 'views/jefeTaller/motorTrabajando.html';
        });
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ha ocurrido un error comuniquese con su colaborador",
        });
    }

}
