const db = firebase.firestore();

export let imagen;
export let name;
export let email;
export const profile = () => {
  let user =  auth.currentUser;
  if (user != null) {
    name = user.displayName;
    imagen = user.photoURL;
    email = user.email;
  }
  else{
    imagen = "Imagenes/perfil.png";
  }


  if(imagen == null){
    imagen = "Imagenes/perfil.png";
  }

  const pgPerfil =   
    `
    <nav class="navigation1">
      <ul>
        <li class="select"><a href="#/Login" class="link-btn">Inicio</a></li>
        <li class="select"><a href="#/Perfil" class="link-btn">Perfil</a></li>
        <li class="select"><a href="#/Animes" class="link-btn">Animes</a></li>
        <li class="select"><a href="#" id="logout"class="link-btn">Cerrar Sesión</a></li>
      </ul>
    </nav>
    </a>
  </div><div id"perfil"></div>
  <div class="containerProfile">
     <img class="avatar" src= "${imagen}" alt="">
    <h1 class="name">${name}</h1>
  </div>
  <div class="container-globalPro">
    <div class="containerInfo">
      <h1>Sobre Mi</h1>
      <h3 class="letra">Pais: Colombia</h3>
      <h3 class="letra">Email: ${email}</h3>
    </div>
    <div class="containerPublication">
      <form id="publicForm" action="/images" onsubmit="return false">
      <img src='${imagen}' class="avatar1" alt="">
      <textarea name="" id="textControl" class="textControl" cols="108" rows="5" placeholder="¿Que estas pensando?"></textarea>
        <button type="submit" id="buttonPublic">PUBLICAR</button>
      </div>
      </form>
    </div>
      <div class="containerinfo1" id="containerinfo1">
      <h1 id="publicationTitle">Ultimas Publicaciones</h1>
      </div>
  </div>`
  const vistaPerfil = document.createElement("div")
  vistaPerfil.innerHTML = pgPerfil
  return vistaPerfil
}
export const event = async () => {
  const logout = document.querySelector('#logout');
  logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut()
      .then(() => {
        swal.fire('cerro sesion');
        redirectToInicio();
      })
  })
}
export function redirectToInicio() {
  window.location.hash = '#';
}
export const publicHistory = () => {
  const publicForm = document.getElementById('publicForm')
  const containerinfo1 = document.getElementById('containerinfo1')
  let editStatus = false
  let id = ""
  const saveThoughts = (publication) =>
    db.collection('thoughts').doc().set({
      publication
    })
  const getThoughts = () => db.collection('thoughts').get()
  const editThoughts = (id) => db.collection('thoughts').doc(id).get()
  const onGetThoughts = (callback) => db.collection('thoughts').onSnapshot(callback)
  const deleteThoug = id => db.collection('thoughts').doc(id).delete()
  const updateThoug = (id, updateThoug) => db.collection('thoughts').doc(id).update(updateThoug)
  onGetThoughts((querySnapshort) => {
    containerinfo1.innerHTML = "";
    querySnapshort.forEach(doc => {
      const thought = doc.data()
      thought.id = doc.id
      containerinfo1.innerHTML += `<div class="showPublication">
        <p> ${thought.publication}</p>
        <button class="btnBorrar" data-id="${thought.id}">BORRAR</button>
        <button class="btnEditar" data-id="${thought.id}">EDITAR</button>
        </div>`
      const btnsBorrar = document.querySelectorAll('.btnBorrar')
      btnsBorrar.forEach(btns => {
        btns.addEventListener('click', (e) => {
          const datosImport = e.target.dataset
          deleteThoug(datosImport.id)
        })
      })
      const btnsEditar = document.querySelectorAll('.btnEditar')
      btnsEditar.forEach(btns => {
        btns.addEventListener('click', async (e) => {
          const doc = await editThoughts(e.target.dataset.id)
          const thought = doc.data()
          editStatus = true
          id = doc.id
          publicForm['textControl'].value = thought.publication
          publicForm['buttonPublic'].innerText = 'CARGAR'
        })
      })
    })
  })
  publicForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const publication = publicForm['textControl'].value;
    if (!editStatus) {
      await saveThoughts(publication)
    } else {
      await updateThoug(id, {
        publication: textControl.value
      })
      editStatus = false
      id = ''
      publicForm['buttonPublic'].innerText = 'PUBLICAR'
    }
    await getThoughts()
    publicForm.reset()
  })
}
