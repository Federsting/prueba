const botonLogin = document.getElementById("login");

botonLogin.addEventListener("click", function () {

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: user,
            password: password
        })
    }).then(function (respuesta) {
        return respuesta.json();
    }).then(function (res) {
        console.log(res);

        if (res.error) {
            alert('Ocurrió un error');
        } else {
            alert('Login Exitoso');
            localStorage.setItem('jwt', res.token);
        }
    });
});

module.exports = { data: botonLogin }