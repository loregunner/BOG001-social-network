import { router } from "../router.js";
import { redirectToLogin, verify } from "./login.js";

export const registro = () => {
  const template3 =
    `<form action="" class="formulario" id="formulario">
    <div class="containerRegister active" id="containerRegister">
      <div class="form-box1" id='form-box1'>
        <a href="#" id="close-Register" class="close-register"><i class="fas fa-times"></i></a>
        <form class="input-group">
          <div class="formulario__grupo" id="grupo__usuario">
            <label for="usuario" class="formulario__label">Usuario</label>
            <div class="formulario__grupo-input">
              <input type="text" class="input-field" name="usuario" id="usuario" placeholder="nikilovelu">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El usuario tiene que ser de 4 a 16 dígitos y solo puede contener
              numeros, letras y guion bajo.</p>
          </div>
          <div class="formulario__grupo" id="grupo__correo">
            <label for="correo" class="formulario__label">Correo Electrónico</label>
            <div class="formulario__grupo-input">
              <input type="email" class="input-field" name="correo" id="correo" placeholder="correo@correo.com">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion
              bajo.</p>
          </div>
          <div class="formulario__grupo" id="grupo__password">
            <label for="password" class="formulario__label">Contraseña</label>
            <div class="formulario__grupo-input">
              <input type="password" class="input-field" name="password" id="password">
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <img src = "./ver.svg" class="eye" id="boton">
            <p class="formulario__input-error">La contraseña tiene que ser de 6 a 12 dígitos.</p>
          </div>
          <div class="box-check">
            <div class="formulario__grupo" id="grupo__terminos">
              <label class="input-check">
                <input class="check-box" type="checkbox" name="terminos" id="mujer">
                Mujer
              </label>
            </div>
            <div class="formulario__grupo" id="grupo__terminos">
              <label class="input-check">
                <input class="check-box" type="checkbox" name="terminos" id="hombre">
                Hombre
              </label>
            </div>
          </div>
          <div class="formulario__mensaje" id="formulario__mensaje">
            <p class="error"><i class="fas fa-exclamation-triangle"></i> <b>Error:</b> Por favor rellena el formulario
              correctamente. </p>
          </div>

          <div class="formulario__grupo formulario__grupo-btn-enviar">
            <button type="submit" class="submit-btn" >Enviar</button>
          </div>
        </form>
      </div>
    </div>
  </form>
`
  const vistaRegistro = document.createElement("div")
  vistaRegistro.innerHTML = template3;
  return vistaRegistro
}

export const evento2 = () => {
  const closeRegister = document.querySelector("#close-Register")
  closeRegister.addEventListener('click', () => {
    console.log("Cerro registro")
    router("")
  })
  const botonEye = document.getElementById("boton");
  const eyePass = document.getElementById("password");
  botonEye.addEventListener('click', () => {
    if(eyePass.type == "password"){
      eyePass.type = "text";
      botonEye.src = "./eye-no.svg";

      setTimeout(() => {
        eyePass.type = "password";
        botonEye.src = "./ver.svg";
      }, 3000)
    }
    else{
      eyePass.type = "password";
      botonEye.src = "./ver.svg";
    }
  });

  const singUp = document.querySelector('#formulario');
  singUp.addEventListener('submit', (e) => {
    e.preventDefault();
    const displayName = document.querySelector('#usuario').value;
    console.log(displayName);
    const Email = document.querySelector('#correo').value;
    const Password = document.querySelector('#password').value;
    console.log(Email, Password)
    let user = null
   auth
      .createUserWithEmailAndPassword(Email, Password)
      .then(function () {
        swal.fire("te has registrado exitosamente");
        redirectToRegister();
        verify();
        auth.currentUser.updateProfile({
          displayName: displayName,
        });
      })
      .catch(error => {
        alert('Oppss Hubo Problema, tu usuario no se registro, intentalo nuevamente')
      })
  })
}
export function redirectToRegister() {
  window.location.hash = '#/formulario';
}
export const validarRegistro = () => {

  const formulario = document.getElementById('formulario');
  const inputs = document.querySelectorAll('#formulario input');

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  }

  const campos = {
    usuario: false,
    password: false,
    correo: false,
  }

  const validarFormulario = (e) => {
    switch (e.target.name) {
      case "usuario":
        validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
      case "password":
        validarCampo(expresiones.password, e.target, 'password');
        break;
      case "correo":
        validarCampo(expresiones.correo, e.target, 'correo');
        break;
    }
  }

  const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
      campos[campo] = true;
    } else {
      document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
      document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
      document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
      campos[campo] = false;
    }
  }

  inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
  });

}


