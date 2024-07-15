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
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "ha ocurrido un error comuniquese con su colaborador",
        });
    }
}
