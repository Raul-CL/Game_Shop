//! Validacion de cuenta ingresada por usuario
let logIn = () => {
  let userAccount = document.querySelector("#userAccount").value
  let userPassword = document.querySelector("#userPassword").value
  let loginModalClose = document.querySelector("#loginModalClose")
  let accountFound = Users.filter(account => account.account == userAccount && account.password == userPassword)
  if (accountFound.length > 0){
    let [{account = "test",password = "test",email = "test"}] = accountFound 
    swal.fire(msjErrorSweetAlert("Exito","Cuenta y contraseña correcta","success"),
    setTimeout(() => {loginModalClose.click()}, 1200),
    removeLoginMenu(),
    setloggedMenu(),
    setLocalStorageAccount([account,password,email]))
  }else swal.fire(msjErrorSweetAlert("Error","Cuenta o contraseña incorrecta","error"))
}

//! login
const btnLogin = document.querySelector("#btnLogin")
btnLogin.addEventListener('click',logIn)

//? Insertando datos de cuenta en local storage
const setLocalStorageAccount = (account) =>{
  let accountJSON = JSON.stringify(account)
  //console.log(accountJSON)
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
  //console.log("Agregando Menu Logged")
  //console.log(loggedMenu.classList.contains('d-none')) 
  loggedMenu.classList.contains('d-none') &&
    loggedMenu.classList.remove('d-none')
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
const loginStatusValidation = () =>{
  return new Promise((resolve,reject) =>{
    const status = JSON.parse(localStorage.getItem("logged"))
    status !== true 
    ? reject(false) 
    : resolve(true)
  })
}

//? Valida el menu al inicio de sesion y coloca el que debe ir
const menuValidation = () =>{
  loginStatusValidation().then((status) => {
    //console.log(status)
    status === true ? (setloggedMenu(), removeLoginMenu())
    : console.log("cuenta no logeada")
  }).catch((error) => {
    console.log(error, "Cuenta no logeada")
  })
} 
window.addEventListener('load',menuValidation)

let gameList 
const pedidoAPI = async () => {
  let spinner = document.querySelector("#spinner")
  spinner.classList.remove('d-none')

  const response = await fetch('./data/dataGame.json') //Pasa a ser sincronico
  const data = await response.json()
  gameList = data
  //console.log(gameList)
  //!RENDERIZAR VISTAS
  setGameGenders(getGameGenders(gameList))
  setGamePlatforms(getGamePlatform(gameList))
  setGameCards(gameList)
  
  spinner.classList.add('d-none')
}
pedidoAPI()


//? Funcion recibe un array - Itera el array con forEach y si no existe el elemento se agrega - Devuelve un nuevo array solo con los generos sin repetir.
const getGameGenders = (games) => {
  const genreList = []
    games.forEach(game => {
      !genreList.includes(game.genre) && genreList.push(game.genre)
    })
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
//SE LLAMA EN FUNCION FETCH
//setGameGenders(getGameGenders(gameList)) //! Cuando cargue la pagina

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
//SE LLAMA EN FUNCION FETCH
//setGamePlatforms(getGamePlatform(gameList))

//? Agregar listener a btns del carrito
const addListenerCar = () =>{
  const btnAddToCar = document.querySelectorAll(".btnAddToCar")
  btnAddToCar.forEach(btn =>{
    btn.addEventListener('click',(evnt) =>{
      addToCar(evnt)
    })
  })
}

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
    <button id="btnAddToCar" data-id="${gameCard.id}" class="btnAddToCar">Agregar al carrito</button>
    </article>`
    gameCardContainer.innerHTML += innerHTMLGameContainer
    /* console.log(gameCard) */
  })
  addListenerCar()
}
//SE LLAMA EN FUNCION FETCH
//setGameCards(gameList) //! Cuando cargue la pagina

//? Eventos change de filtros, que llama a funcion para aplicar los filtros
const filtersListener = () => {
  let genreFilter = document.querySelector("#genreFilter")
  let platformFilter = document.querySelector("#platformFilter")
  genreFilter.addEventListener('change',() => applyFilter())
  platformFilter.addEventListener('change',() => applyFilter())
  //console.log("Evento change de filters")
}
filtersListener() //! Aplicacion de filtros

//? Funcion para obtener filtros, regresa un array con ambos valores
const getFilters = () => {
  let genre = document.querySelector("#genreFilter").value
  let platform = document.querySelector("#platformFilter").value
  /* console.log(genre,platform) */
  return [genre,platform]
}

//? Aplica filtros, si no se encuentra un juego llama a funcion de error
const applyFilter = ()=>{
  let [genre,platform] = getFilters()
  let filterGames = []
  if(genre != "0" && platform != "0"){
    filterGames = gameList.filter(game => game.genre == genre && game.platform == platform)
    setGameCards(filterGames)
    if(filterGames.length < 1) gamesNoFound()
  }else if(genre != "0" && platform == "0"){
    filterGames = gameList.filter(game => game.genre == genre)
    setGameCards(filterGames)
    if(filterGames.length < 1) gamesNoFound()
  }else if(genre == "0" && platform != "0"){
    filterGames = gameList.filter(game => game.platform == platform)
    setGameCards(filterGames)
    if(filterGames.length < 1) gamesNoFound() 
  }else if(genre == "0" && platform == "0"){
    filterGames = gameList
    setGameCards(filterGames)
  }
  //console.log(filterGames)  
}

//? Funcion para mostrar mensaje de error
const gamesNoFound = ()=>{
  let cardContainer = document.querySelector("#gameCardsContainer")
  cardContainer.innerHTML = ``
  swal.fire(msjErrorSweetAlert("No se encontraron juegos","No existen juegos con estos filtros","warning"))
}

//? Valida estatus si es true retorna el ID del juego
const addToCar = (evnt) => {
  loginStatusValidation().then((status) => {
    //console.log(evnt.target.attributes)
    let gameId = evnt.target.attributes['data-id'].value -1
    status === true && (createGameCar(gameId))    
  }).catch(() => swal.fire(msjErrorSweetAlert("Error","Para agregar al carrigo debe iniciar sesion","warning")))
}

//? Agrega juegos al carrito
const gameCarArray = []
const createGameCar = (id) =>{
  //console.log(gameList[id])
  gameCarArray.length < 1
  ? (gameCarArray.push(gameList[id]),
    printCar(gameCarArray),
    successAction.fire({title: `Juego agregado al carrito`}))
  : gameCarArray.includes(gameList[id]) 
    ? swal.fire(msjErrorSweetAlert("Juego adquirido","El juego ya se encuentra en carrito","warning"))
    : (gameCarArray.push(gameList[id]),
      printCar(gameCarArray), 
      successAction.fire({title: `Juego agregado al carrito`}))
  //console.log(gameCarArray)
}

//? Crea plantilla de carrito
const printCar = () =>{
  /* console.log(gameCarArray) */
  const carModalBody = document.querySelector("#carModalBody")
  const carPrice = document.querySelector("#carPrice")
  carModalBody.innerHTML=''
  let carItem,price = 0
  gameCarArray.forEach(game => {
    //console.log(game)
    carItem = `<article id="${game.id}" class="col-12 d-flex flex-row justify-content-evenly text-center align-items-center">
    <img src="${game.thumbnail}" alt="${game.title}" class="col-4">
    <h3 class="col-4 h-100">${game.title}</h3>
    <p class="col-4 h-100">$${game.price}</p>
    </article> <hr>`
    carModalBody.innerHTML += carItem
    price += +game.price
  })
  carPrice.innerHTML= "$"+price
  
}

//? Vacia carrito
const btnEmpyCar = document.querySelector("#empyCar")
const empyCar = () =>{
  swal.fire(msjConfirmSweetAlert("Estas seguro?","El carrito sera eliminado","question","Vaciar carrito")).then((result) => {
    if (result.isConfirmed) {
      successAction.fire({title: 'Carrito vaciado'})
      carModalBody.innerHTML = ''
      carPrice.innerHTML='$0' 
      gameCarArray.length = 0
    }
  })
  const carModalBody = document.querySelector("#carModalBody")
  const carPrice = document.querySelector("#carPrice")
}
btnEmpyCar.addEventListener("click", empyCar)


