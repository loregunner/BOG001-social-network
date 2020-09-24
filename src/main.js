
//Se importa la funcion de
import { router } from '../router.js'

const first = () => {
  router(window.location.hash)
  window.addEventListener('hashchange', () => {
    router(window.location.hash)
  })
}
history.pushState(null, document.title, location.href);
window.addEventListener('popstate', function (event)
{
  history.pushState(null, document.title, location.href);
});

window.addEventListener('load', first)


/*import { myFunction } from './lib/index.js';
myFunction();
 formularios cerrar
const showLogin = document.getElementById('link-btn');
const containerLogin = document.getElementById('containerLogin');
const containerBox = document.getElementById('form-box');
const closeLogin = document.getElementById('close-login');
showLogin.addEventListener('click', () => {
	containerLogin.classList.add('active');
	containerBox.classList.add('active');
});
closeLogin.addEventListener('click', () => {
	containerLogin.classList.remove('active');
	containerBox.classList.remove('active');
});
const showRegister = document.getElementById('link-btn1');
const containerRegister = document.getElementById('containerRegister');
const containerBox1 = document.getElementById('form-box1');
const closeRegister = document.getElementById('close-Register');
showRegister.addEventListener('click', () => {
	containerRegister.classList.add('active');
	containerBox1.classList.add('active');
});
closeRegister.addEventListener('click', () => {
	containerRegister.classList.remove('active');
	containerBox1.classList.remove('active');
});







validacion de expresiones formulario
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const formLogin = document.getElementById('form');
const inpustLogin = document.querySelectorAll('#form input');
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	password: /^.{6,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const expresiones2 = {
	user:  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	password0: /^.{6,12}$/, // 4 a 12 digitos.
}

const campos = {
	usuario: false,
	password: false,
	correo: false
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
const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
			break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
			break;
		case "password2":
			validarPassword2();
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

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if (inputPassword1.value !== inputPassword2.value) {
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

inpustLogin.forEach((input) => {
	input.addEventListener('keyup', validarLogin);
	input.addEventListener('blur', validarLogin);
});
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if (campos.usuario && campos.password && campos.correo) {
		formulario.reset();
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});

guardar datos del formulario de registro

firebase

const singUp = document.querySelector('#formulario');

singUp.addEventListener('submit', (e) => {
	e.preventDefault();
	const Usuario = document.querySelector('#usuario').value;
	const Email = document.querySelector('#correo').value;
	const Password = document.querySelector('#password').value;
	console.log(Usuario, Email, Password)
	auth
		.createUserWithEmailAndPassword(Email, Password)
		.then(userCredential => {
				swal.fire('te has registrado exitosamente')
		})
		.catch(error => {
			swal.fire('Oppss Hubo Problema, tu usuario no se registro, intentalo nuevamente')
		})
})

 login firebase

const signinForm = document.querySelector('#form');
signinForm.addEventListener('submit-btn1', (e) => {
	e.preventDefault();
	const Usuario = document.querySelector('#user').value;
	const password = document.querySelector('#password0').value;


	auth
		.signInWithEmailAndPassword(Usuario, password)
		.then(userCredential => {
			swal.fire('bienvenido de nuevo')
	})
	.catch(error => {
		swal.fire('tu correo o contraseña estan')
	})

})

 autentificacion del login
function observado(){
auth.onAuthStateChanged(usur => {
	if (usur) {
		console.log('existe usuario activo')
		const displayName = user.displayName;
		const email = user.email;
		const emailVerified = user.emailVerified;
		const photoURL = user.photoURL;
		const isAnonymous = user.isAnonymous;
		const uid = user.uid;
		const providerData = user.providerData;
	}
	else {
		console.log('no existe usuario activo')
	}
})
}
observado();*/