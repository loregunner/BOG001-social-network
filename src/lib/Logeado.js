let name;
let email;
let userID;
let userLike = [];
let counterLike = 0;
let photoURL
export const logeado = () => {
        auth.onAuthStateChanged(user => {
          if (user) {
            console.log('existe usuario activo')
            name = user.displayName;
            email = user.email;
            photoURL = user.photoURL;
            userID = user.uid;
          }
          else {
            console.log('no existe usuario activo');
            window.onbeforeunload = function() { return "Your work will be lost."; };
          }
        })
    const headerLogin = `  <div class="container-firts">
    <div class="container logo-nav-container">
        <div class="container-logo">
            <div class="container-img-logo"><img class="logoImg" src="./Logo1.png">
                <div class="name-logo">ShojoAnime</div>
                <div class="name-logo1">Social</div>
            </div>
        </div>
        <nav class="navigation1">
        <ul>
            <li class="select"><a href="#/Login" class="link-btn">Inicio</a></li>
            <li class="select"><a href="#/Perfil" class="link-btn">Perfil</a></li>
            <li class="select"><a href="#/Animes" class="link-btn">Animes</a></li>
            <li class="select"><a href="#" id="logout" class="link-btn">Cerrar Sesión</a></li>
        </ul>
    </nav>
    </a>
</div>`

    
    const vistaLogin = document.createElement("div")
    vistaLogin.innerHTML = headerLogin
    return vistaLogin
}

export const centroLog = () => {
    const centro = `<div class="card-body">
    <form action="" onsubmit="return false" id="formPublic" method="POST" enctype="multipart/form-data">
        <div class="form-group">
            <textarea name="description" rows="5" cols="108" id="miid" class="form-control"
                placeholder="Que estas pensando? #Shojo #Animes #Manga"></textarea>
        </div>
        <div class="container3">
            <div class="fotob">
               <label class="btn btn-file">
               <input type="file" name="fichero" value="" id="fichero" class="hidden">
               <img class="foto" id="foto-button1" src="./foto.svg" alt="descargar">
               </label>
                <img class="video" id="foto-button2" src="./camara-de-video.svg">
                <img class="musica" id="foto-button3" src="./musica.svg">
                <img class="lista" id="foto-button4" src="./lista.svg">
            </div>
            <div class="button">
                <button type="submit" id="public-button" class="public-button">
                    <img class="publicar" src="/blog.svg"> PUBLICAR

                </button>

            </div>
        </div>
    </form>
</div>


<div id="publicacion">
<div id="mostrar">
<div>
<div>
`

   
const cenLogin = document.createElement("div")
cenLogin.innerHTML = centro
return cenLogin
}
export const getThoughts = () => fs.collection('anime').get();
export const deleteThoug = (id) => fs.collection('anime').doc(id).delete()
export const editThoughts = (id) => fs.collection('anime').doc(id).get()
export const onGetThoughts = (id) => fs.collection('anime').onSnapshot(id)
export const updateThoug = (id, updateThoug) => fs.collection('anime').doc(id).update(updateThoug)
let statusEdit = false
let id = '';

let fotoBoton;
let StorageRef;
let imagenesFbRef;
    export const publicacion = async () => {
       let publi = document.getElementById('formPublic');
        const save = async (descripcion, name, userID, userLike,counterLike) =>{ 
            fs.collection("anime").doc().set({
               descripcion,
               name,
               userID,
               userLike,  
               counterLike   
              
           });
           }
         publi.addEventListener('submit' , async (e) => {
           e.preventDefault();
           const descripcion = publi["miid"];
    
           if(!statusEdit){
             await save (descripcion.value,name, userID,userLike,counterLike);
           }
           else{
            await updateThoug(id, {
                descripcion: descripcion.value
              });
           statusEdit = false
           id = ''
           publi["public-button"].innerText = 'PUBLICAR'
            }
          
           await getThoughts()
           publi.reset()
           
         })
         }
         export const edit = async () => {
            const publi = document.getElementById('formPublic');
            const botonEdit = document.querySelectorAll('.editando')
            botonEdit.forEach((btn) => {
             btn.addEventListener('click',async (e) => {
                const datosImport = e.target.dataset
                const doc = await editThoughts(datosImport.id)
                let data = doc.data();
                 if(data.userID === userID){
                const cambios = doc.data();
                     
                 statusEdit = true;
                 id = doc.id;
                 console.log(id);
                publi["miid"].value = cambios.descripcion;
                publi["public-button"].innerText = "Editar"
                 }
                 else{
                     swal.fire('no puedes editar esta publicacion')
                 }
                })
            })
            };
    export const borrar = async () =>{
        const boton = document.querySelectorAll('.basura')
            boton.forEach(btn => {  
                btn.addEventListener('click' ,async (e) =>{
                    const datosImport = e.target.dataset
                     const doc = await editThoughts(datosImport.id)
                    let data = doc.data();
                    if(data.userID === userID){
                    const datosImport = e.target.dataset
                        await deleteThoug(datosImport.id);
                    }
                    else{
                        swal.fire('no puedes borrar esta publicacion')
                    }
                })
              })
    }  
    export const like = async () => {
        const botonLike = document.querySelectorAll('.like');
        const botonHeart = document.querySelectorAll('.heart')
        botonLike.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            if(e.target.className === 'like'){
                let id = e.target.dataset.id; 
                console.log(id) 
                const doc = await editThoughts(id)
                let data = doc.data();
                let userLike = data.userLike;
                let counterLike = data.counterLike;
                userLike.push(userID);
                e.target.classList.remove('like');
                e.target.classList.add('heart');  
                counterLike++;      
                updateThoug(id,{userLike, counterLike})
    
          }
         else{
            return;
        }
        
          })
    })
    botonHeart.forEach((btn) => {
        btn.addEventListener('click', async (e) => {
      if(e.target.className === 'heart'){
        let id = e.target.dataset.id;  
        const doc = await editThoughts(id)
        let data = doc.data();
        let userLike = data.userLike;
        let counterLike = data.counterLike;
        e.target.classList.remove('heart');
        e.target.classList.add('like'); 
        let findPosition = userLike.indexOf(userID);  
        if(findPosition !== -1){
            userLike.splice(findPosition,1); 
        } 
        counterLike = counterLike-1;
        updateThoug(id,{userLike,counterLike});
    }
})
})
    };
    let result = "";
    export const mostrar = async () =>{
        const publicando = document.getElementById('publicacion');
        let fotoBoton = document.getElementById('fichero');
        fotoBoton.addEventListener("change", subirImagenaFirebase, false);
        StorageRef = firebase.storage().ref();
        imagenesFbRef = firebase.database().ref().child("subeImagen");
        function subirImagenaFirebase() {
           let imageSubir = fotoBoton.files[0];
           let uploadTask = StorageRef.child('images/' + imageSubir.name).put(imageSubir);
           uploadTask.on('state_changed', 
            function (snapshot){
    
           },function error(){
             alert("hubo un error")
           }, function(){
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
               crearNodoEnBDFirebase(imageSubir.name , downloadURL);
            });
           });
        }
        function crearNodoEnBDFirebase(nombreImagen, downloadURL){
            imagenesFbRef.push({nombre : nombreImagen, url : downloadURL});
        }
       
        const mostrarImagen  = async (e) => { 
            imagenesFbRef.on("value",function(snapshot){
                let datos = snapshot.val();
                for(let key in datos){
                    result += '<img width="40%"src="' + datos[key].url + '"/>';
                }
                //publicando.innerHTML =  `${result}` 
            })
        } 
        mostrarImagen();
        }
export const publicar = async () => {
    const publicando = document.getElementById('publicacion');
    onGetThoughts((querySnapshot) => {
        publicando.innerHTML =  "";
        querySnapshot.forEach(doc => {
            const thought = doc.data();
            thought.id = doc.id
            console.log(thought);
            const usersLikes= thought.userLike;

            let iconLike='';
            let IconHeart='';
            if(usersLikes.includes(userID)){
                 iconLike = ` <div class="likeHeart">
                <img class="heart"data-id="${thought.id}"src="/heart.svg">${thought.counterLike}
                </div>`
            }else{
               IconHeart =`<div class="likebutton">
                <img class="like"data-id="${thought.id}" src="/me-gusta.svg">${thought.counterLike}
                </div>`
            } 
            
               publicando.innerHTML += `
               <tr><div class="publicen">
               <div class="publica">                   
                ${doc.data().descripcion}
                </div>
                <div class="seccion">
                <a class="usuario">${thought.name}</a>
                <div class="completo">
                ${iconLike}
                ${IconHeart}
                <div class="comentario">
                <img class="comentar" src="/comentario.svg">Comentar
                </div>
                <div class="borrar">
                <img class="basura" data-id="${thought.id}" src="/basura.svg">
                <td>
                </div>
                <div class="editar">
                <img class="editando" data-id="${thought.id}"src="/editar.svg">
                </div>
                </div>
                </div>
            </div>
            <tr>
        `

        })
        edit();
        borrar();
        like();
        mostrar();
     })
    }
