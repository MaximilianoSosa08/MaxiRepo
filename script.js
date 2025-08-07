function Login() {

  const mail = document.getElementById("Email").value;
  const pass = document.getElementById("Password").value;

  if (mail === "Maximiliano@gmail.com" && pass === "1234") {
    alert("¡Bienvenido!");
  } else {
    alert("Datos incorrectos.");
  }
  
}