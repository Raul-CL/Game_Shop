//! Inicio Validacion
//? Array con cuentas registradas
const Users = [{
  account : "raul.corral",
  password: "qwe123",
  email: "raulcorral20@gmail.com"
},{
  account : "laura.garza",
  password: "qwe123",
  email: "laura.garza@gmail.com"
},{
  account : "admin",
  password: "123",
  email: "admin@gmail.com"
}]



//! Funcion para validar si la cuenta y el usuario existen en el array Users
let logIn = () => {
  let userAccount = document.querySelector("#userAccount").value
  let userPassword = document.querySelector("#userPassword").value
  let loginModalClose = document.querySelector("#loginModalClose")
  /* console.log(userAccount,userPassword) */
  let accountValidation = Users.filter(account => account.account == userAccount)
   //console.log(accountValidation) 
  if (accountValidation.length === 0 ) {
    /* console.log("Cuenta incorrecta") */
    swal.fire(msjErrorSweetAlert("Cuenta incorrecta","Intente de nuevo","error"))
    return false
  }else{
    if(userAccount == accountValidation[0].account){
      //console.log("Cuenta correcta")
      if(userPassword === accountValidation[0].password){
        //console.log("Contraseña correcta puede entrar")
        swal.fire(msjErrorSweetAlert("Exito","Cuenta y contraseña correcta","success"))
        setTimeout(() => {
          loginModalClose.click()
        }, 1200);
        removeLoginMenu()
        setloggedMenu()
        //todo Se agregara funcion para cambiar botones de login por datos de usuario
        //console.log(accountValidation )
        setLocalStorageAccount(accountValidation)  
      }else {
        /* console.log("Error contraseña incorrecta") */
        swal.fire(msjErrorSweetAlert("Contraseña incorrecta","Intente de nuevo","error"))
        return false
      }
    }else console.log("Error")
  } 
}

//! login
const btnLogin = document.querySelector("#btnLogin")
btnLogin.addEventListener('click',logIn)

//? Insertando datos de cuenta en local storage
const setLocalStorageAccount = (account) =>{
  //console.log(account)
  let accountJSON = JSON.stringify(account)
  localStorage.setItem("account",accountJSON)
  localStorage.setItem("logged","true")
}

//? Obtener datos de cuenta en local storage
const getLocalStorageAccount = () =>{
  let account = localStorage.getItem("account")
  //console.log(account)
  return account
}

//? Cambiar botones por datos de usuario
const removeLoginMenu = () =>{
  const loginMenu = document.querySelector("#loginMenu")
  loginMenu.classList.add('d-none')
}

//? Cambia botones por menu con carrito e icono de usuario
const setloggedMenu = () =>{
  const loggedMenu = document.querySelector("#loggedMenu")
  console.log("Agregando Menu Logged")
//   console.log(loggedMenu.classList.contains('d-none')) 
  if(loggedMenu.classList.contains('d-none')) {
    loggedMenu.classList.remove('d-none')
  }
  localStorage.setItem("logged","true")
  
}

//? Cierra la sesion del usuario y regresa botones
const btnLogOut = document.querySelector("#logOut")
const logOut = () =>{
  const loggedMenu = document.querySelector("#loggedMenu")
  loggedMenu.classList.add('d-none')
  const loginMenu = document.querySelector("#loginMenu")
  loginMenu.classList.remove('d-none')
  localStorage.clear()
}
btnLogOut.addEventListener('click',logOut)



//? Validacion cuenta logeada
/* const loginStatusValidation = () =>{
  return new Promise((resolve,reject) =>{
    const status = JSON.parse(localStorage.getItem("logged"))
    status !== true 
    ? reject(false) 
    : resolve(true)
  })
}


const menuValidation = () =>{
  loginStatusValidation().then((status) => {
    console.log(status)
    status === true ? setloggedMenu() : console.log("cuenta no logeada")
  }).catch((error) => {
    console.log(error)
  })
} */
//window.addEventListener('load',menuValidation)


//? Clase Game
class Game{
  constructor(id,title,price,thumbnail,description,genre,platform){
    this.id = id ,
    this.title = title ,
    this.price = price ,
    this.thumbnail = thumbnail ,
    this.description = description ,
    this.genre = genre ,
    this.platform = platform 
  }
}

//? Object Game
const game1 = new Game(1,"Dauntless",0,"https://www.freetogame.com/g/1/thumbnail.jpg","A free-to-play, co-op action RPG with gameplay similar to Monster Hunter.","MMORPG","Nintendo Switch")
const game2 = new Game(2,"World of Tanks",250,"https://www.freetogame.com/g/2/thumbnail.jpg","If you like blowing up tanks, with a quick and intense game style you will love this game!","Action","Nintendo Switch")
const game3 = new Game(3,"Warframe",0,"https://www.freetogame.com/g/3/thumbnail.jpg","A cooperative free-to-play third person online action shooter set in an stunning sci-fi world. ","Shooter","PC (Windows)")
const game4 = new Game(4,"CRSED: F.O.A.D.",300,"https://www.freetogame.com/g/4/thumbnail.jpg","Take the battle royale genre and add  mystical powers and you have CRSED: F.O.A.D. (Aka Cuisine Royale: Second Edition)","Shooter","PC (Windows)")
const game5 = new Game(5,"Crossout",770,"https://www.freetogame.com/g/5/thumbnail.jpg","A post-apocalyptic MMO vehicle combat game! ","Action","XBox")
const game6 = new Game(6,"Blade and Soul",0,"https://www.freetogame.com/g/6/thumbnail.jpg","A free-to-play martial arts MMORPG that tasks players with learning combination attacks.","Strategy","XBox")
const game7 = new Game(7,"Armored Warfare",550,"https://www.freetogame.com/g/7/thumbnail.jpg","A modern team-based MMO tank game from Obsidian Entertainment.","Shooter","PS5")
const game8 = new Game(8,"Trove",200,"https://www.freetogame.com/g/8/thumbnail.jpg","A free to play Sandbox massively multiplayer online role-playing game! ","MMORPG","PS5")
const game9 = new Game(10,"ArcheAge",50,"https://www.freetogame.com/g/10/thumbnail.jpg","A free-to-play, hybrid fantasy/sandbox MMORPG brought to you by Trion Worlds.","Strategy","Movil")

//? Funcion para agregar objetos al arregl
const gameList = []
const createGameList = (game)=>{
  gameList.push(game)
}
createGameList(game1)
createGameList(game2)
createGameList(game3)
createGameList(game4)
createGameList(game5)
createGameList(game6)
createGameList(game7)
createGameList(game8)
createGameList(game9)
 
/* console.log(gameList) */

//? Funcion recibe un array - Itera el array con forEach y si no existe el elemento se agrega - Devuelve un nuevo array solo con los generos sin repetir.
const getGameGenders = (games) => {
  const genreList = []
    games.forEach(game => {
      if(!genreList.includes(game.genre)){
        genreList.push(game.genre)
      }     
    });
    /* console.log(genreList) */   //! Array generos
    return genreList
}

//? recibo como parametro una funcion con un array, selecciono mi html, itero y agrego datos de cada iteracion 
const setGameGenders = (genres)=>{
  /* console.log(genres) */
  let genreFilter = document.querySelector("#genreFilter")
  let innerHTMLSelect = ""
  genres.forEach(genre =>{
    innerHTMLSelect = `<option value="${genre}">${genre}</option>`
    genreFilter.innerHTML  += innerHTMLSelect
  })
}
//?Llamo mi funcion y le mando una funcion
setGameGenders(getGameGenders(gameList)) //! Cuando cargue la pagina


//? Recibo un arreglo de objetos, itero el array y genero uno nuevo solo con la propiedad plataformas
const getGamePlatform = (games) => {
  const platforms = []
    games.forEach(game => {
      if(!platforms.includes(game.platform)){
        platforms.push(game.platform)
      }     
    });
    /* console.log(platforms) */   //! Array Plataformas
    return platforms
}

//? Recibo una funcion que me retorna un array, itero el array e introdusco valores de cada iteracion
const setGamePlatforms = (platforms)=>{
  /* console.log(platforms) */
  let platformFilter = document.querySelector("#platformFilter")
  let innerHTMLSelect = ""
  platforms.forEach(platform =>{
    innerHTMLSelect = `<option value="${platform}">${platform}</option>`
    platformFilter.innerHTML  += innerHTMLSelect
  })
}
//? Llamo a mi funcion y mando otra 
setGamePlatforms(getGamePlatform(gameList))

//? Insertar Juegos en HTML
const setGameCards = (games)=>{
  /* console.log(games) */
  let gameCardContainer = document.querySelector("#gameCardsContainer")
  gameCardContainer.innerHTML=""
  let innerHTMLGameContainer = ""
  games.forEach(gameCard=>{
    innerHTMLGameContainer = `
    <article class="gameCard">
    <img class="gameCard__thumbnail" src="${gameCard.thumbnail}" alt="...">
    <h3 class="gameCard__title">${gameCard.title}</h3>
    <p class="gameCard__description">${gameCard.description}</p>
    <p class="gameCard__genre">${gameCard.genre}</p>
    <p class="gameCard__platform">${gameCard.platform}</p>
    <p class="gameCard__price">$${gameCard.price}</p>
    <button id="btnAddToCar" class="btnAddToCar">Agregar al carrito</button>
    <p hidden>${gameCard.id}</p>
    </article>`
    gameCardContainer.innerHTML += innerHTMLGameContainer
    /* console.log(gameCard) */
  })
}
setGameCards(gameList) //! Cuando cargue la pagina

//? Eventos change de filtros, que llama a funcion para aplicar los filtros
const filtersListener = () => {
  let genreFilter = document.querySelector("#genreFilter")
  let platformFilter = document.querySelector("#platformFilter")
  genreFilter.addEventListener('change',() => applyFilter())
  platformFilter.addEventListener('change',() => applyFilter())
}

//? Funcion para obtener filtros, regresa un array con ambos valores
const getFilters = () => {
  let genre = document.querySelector("#genreFilter").value
  let platform = document.querySelector("#platformFilter").value
  /* console.log(genre,platform) */
  return [genre,platform]
}

//? Funcion para mostrar mensaje de error
const gamesNoFound = ()=>{
  let cardContainer = document.querySelector("#gameCardsContainer")
  cardContainer.innerHTML = ``
  swal.fire(msjErrorSweetAlert("No se encontraron juegos","No existen juegos con estos filtros","warning"))
}

//? Aplica filtros, si no se encuentra un juego llama a funcion de error
const applyFilter = ()=>{
  const filtersValues = getFilters()
  let genreFilter = filtersValues[0]
  let platformFilter = filtersValues[1]
  let filterGames = []
  if(genreFilter != "0" && platformFilter != "0"){
    filterGames = gameList.filter(game => game.genre == genreFilter && game.platform == platformFilter)
    setGameCards(filterGames)
    if(filterGames.length < 1) gamesNoFound()
  }else if(genreFilter != "0" && platformFilter == "0"){
    filterGames = gameList.filter(game => game.genre == genreFilter)
    setGameCards(filterGames)
    if(filterGames.length < 1) gamesNoFound()
  }else if(genreFilter == "0" && platformFilter != "0"){
    filterGames = gameList.filter(game => game.platform == platformFilter)
    setGameCards(filterGames)
    if(filterGames.length < 1) gamesNoFound() 
  }else if(genreFilter == "0" && platformFilter == "0"){
    filterGames = gameList
    setGameCards(filterGames)
  }
  console.log(filterGames)  
  
}

filtersListener() //! Aplicacion de filtros

//todo HACER VALIDADOR DE SI EXISTE CUENTA EN LOCAL STORAGE MOSTRAR EL PANEL DE LOGEO
//! CARRITO
//? Validad que este logeado para agregar a carrito
//TODO QUEDA PENDIENTE EL CARRITO HASTA VALIDAR ESTATUS DE LOGIN
/* 
window.addEventListener('load',() =>{
  loggedValidation()
  localStorage.clear()
  let btnAddToCar = document.querySelectorAll(".btnAddToCar")
  let nameGame, priceGame
  btnAddToCar.forEach(card => {
    console.log(card)    
    card.addEventListener('click',(evnt) => {
      nameGame = evnt.target.parentNode.children[1].innerText
      priceGame = evnt.target.parentNode.children[5].innerText
      localStorage.getItem("logged") == "true" ? (
        localStorage.getItem(`${nameGame}`,`${priceGame}`) ?(
          console.log("Error el juego ya existe")
        ):(
          console.log("Juego Agregado al carrito"),
        localStorage.setItem(`${nameGame}`,`${priceGame}`)
        )
      ): (
        swal.fire(msjErrorSweetAlert("Cuenta desconectada","Debe de iniciar sesion antes de agregar al carrito","warning")))
    }) 
  })  
})
 */



//localStorage.setItem("logged","true")
//localStorage.setItem("account",["admin","123","raulcorral20@gmail.com"])
//localStorage.clear()

//let account = JSON.parse(localStorage.getItem("account"))