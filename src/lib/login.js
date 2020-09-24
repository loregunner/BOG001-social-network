
import { router } from "../router.js";
export default () => {
  const template =
    ` <form action="" class="form" id="form">
      <div class="containerLogin" id="containerLogin">
      <div id='form-box' class="form-box">
            <a href="#" id="close-Login" class="close-login"><i class="fas fa-times"></i></a>
        <form class="input-group">
          <div class="form__group " id="group__user">
            <label for="user" class="label__form">Correo</label>
            <div class="form__group-input">
              <input type="text" class="input-field1" name="user" id="user" placeholder="correo electronico">
              <i class="form__valitation-status fas fa-times-circle"></i>
            </div>
            <p class="form__input-error">El correo solo puede contener letras, numeros, puntos, guiones y guion
              bajo..</p>
          </div>

          <div class="form__group" id="group__password">
            <label for="password0" class="label__form">Contraseña</label>
            <div class="form__group-input">
              <input type="password" class="input-field1" name="password0" id="password0" placeholder="contraseña">
              <i class="form__valitation-status fas fa-times-circle"></i>
            </div>
            <img src = "./ver.svg" class="eye" id="boton">
            <p class="form__input-error">La contraseña tiene que ser de 6 a 12 dígitos.</p>
          </div>
          <div class="form__group" id="group__remember">
            <label class="label__form" id="">
              <input type="checkbox" class="checkbox__form" name="remember" id="remember">Recordarme
            </label>
          </div>
          <div class="local" id="local"></div>
          <div class="msj__form" id="msj__form">
            <p class ="error"><i class="fas fa-bomb"></i> <b>Error:</b> Por favor rellena el formulario correctamente.</p>
          </div>
          <div class="exito" id="exito">
            <p class="mensaje-exito" id="mensaje-exito">Formulario enviado exitosamente!</p>
          </div>
          <div class="redes-sociales">
            <p class="access"> O ACCEDE CON: </p>
            <button type="button" id="facebook" class="access">
            <img src="./facebook.svg" class = "imgfa" alt="icono-facebook">
            </button>
            <button type="button" id="google" class="access">
            <img src="./ui.svg" class = "imggo" alt="icono-google">
            </button>
            <p class="access">¿OLVIDASTE TU CONTRASEÑA?</p>
          </div>
          <div class="form__group form__group-btn-acceder">
          <a href="#" id="submit-btn1" class="submit-btn1">ACCEDER</a>
          </div>
        </form>
      </div>
      </div>
    </form>
`
  const vistaDom = document.createElement("div")
  vistaDom.innerHTML = template;
  return vistaDom
}


export const events = () => {
  const closeLogin = document.querySelector("#close-Login")
  closeLogin.addEventListener('click', () => {
    console.log("cerro")
    router("")
  });
 
  const botonEye = document.getElementById("boton");
  const eyePass = document.getElementById("password0");
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
  const googleBtn = document.querySelector('#google')
  googleBtn.addEventListener('click', e => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
    .then(result => {
      redirectToLogin();
      swal.fire('bienvenido de nuevo')
    })
    .catch(err => {
      swal.fire('tu correo o contraseña estan mal, si no te has registrado te invitamos a registrarte')
    })
  })
/*const facebookLogin = document.querySelector('#facebook')
facebookLogin.addEventListener('click', e => {
  e.preventDefault();
 const provider = new firebase.auth.FacebookAuthProvider();
 auth.signInWithPopup(provider)
 .then(result =>{
  console.log(result);
   console.log('facebook login')
 })
 .catch(err =>{
   console.log((err))
 })
})*/
  const signinForm = document.querySelector('#submit-btn1');
  signinForm.addEventListener('click', () => {
      
      const Usuario = document.querySelector('#user').value;
      const password = document.querySelector('#password0').value;
      auth.signInWithEmailAndPassword(Usuario, password)
      .then ((result) => {
          let emailVerificado = result.user.emailVerified;
          let user = result.user;
          if(emailVerificado){
            redirectToLogin();
          }
          else{
              swal.fire('Debes verificar tu correo');
          }
      })
      .catch((error) => {
         swal.fire('contraseña o Email incorrectos');
      })
  });
  
}
export function observado(){
  auth.onAuthStateChanged(user => {
    let photoURL
    if (user) {
      console.log('existe usuario activo')
      const displayName = user.displayName;
      const email = user.email;
      const emailVerified = user.emailVerified;
       photoURL = user.photoURL;
      const isAnonymous = user.isAnonymous;
      const uid = user.uid;
      const providerData = user.providerData;
    }
    else {
      console.log('no existe usuario activo');
      window.onbeforeunload = function() { return "Your work will be lost."; };
    }
  })
  }
  export function redirectToLogin() {
    window.location.hash = '#/Login';
  }
export const validarLogin = () => {
  const inpustLogin = document.querySelectorAll('#form input');

  const expresiones2 = {
	user:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password0: /^.{6,12}$/, // 4 a 12 digitos.
  }
  const validarLogin = (evento) => {
	switch (evento.target.name) {
		case "user":
			if(expresiones2.user.test(evento.target.value)){
				document.getElementById('group__user').classList.remove('form__group-incorrecto');
				document.getElementById('group__user').classList.add('form__group-correcto');
				document.querySelector('#group__user i').classList.add('fa-check-circle');
				document.querySelector('#group__user i').classList.remove('fa-times-circle');
				document.querySelector('#group__user .form__input-error').classList.remove('form__input-error-active');
			}
			else{
				document.getElementById('group__user').classList.add('form__group-incorrecto');
				document.getElementById('group__user').classList.remove('form__group-correcto');
				document.querySelector('#group__user i').classList.add('fa-times-circle');
				document.querySelector('#group__user i').classList.remove('fa-check-circle');
				document.querySelector('#group__user .form__input-error').classList.add('form__input-error-active');
			}
			break;
		case "password0":
			if(expresiones2.password0.test(evento.target.value)){
				document.getElementById('group__password').classList.remove('form__group-incorrecto');
				document.getElementById('group__password').classList.add('form__group-correcto');
				document.querySelector('#group__password i').classList.add('fa-check-circle');
				document.querySelector('#group__password i').classList.remove('fa-times-circle');
				document.querySelector('#group__password .form__input-error').classList.remove('form__input-error-active');
			}
			else{
				document.getElementById('group__password').classList.add('form__group-incorrecto');
				document.getElementById('group__password').classList.remove('form__group-correcto');
				document.querySelector('#group__password i').classList.add('fa-times-circle');
				document.querySelector('#group__password i').classList.remove('fa-check-circle');
				document.querySelector('#group__password .form__input-error').classList.add('form__input-error-active');
			}
			break;
		
	}

}


inpustLogin.forEach((input) => {
	input.addEventListener('keyup', validarLogin);
	input.addEventListener('blur', validarLogin);
});
}
export const verify = () => {
  let user = firebase.auth().currentUser;
  user.sendEmailVerification()
  
  .then(() => {
     swal.fire('Estamos enviando el correo de verificación');
  })
  .catch((error) => {
      swal.fire('no se envio tu correo para verificar');
  });
}