 //! Inicio Validacion
//? Array con cuentas registradas
const Users = [{
  account : "raul.corral",
  password: "qwe123"
},{
  account : "laura.garza",
  password: "qwe123"
},{
  account : "admin",
  password: "123"
}]

//? Funcion para validar si la cuenta y el usuario existen en el array Users
let userValidation = () => {
  //let userLogin = prompt("Introducir cuenta cuenta: admin, pass: 123").toLowerCase()
  let userAccount = document.querySelector("#userAccount").value
  let userPassword = document.querySelector("#userPassword").value
  console.log(userAccount,userPassword)
  let accountValidation = Users.filter(account => account.account == userAccount)
  console.log(accountValidation)
  if (accountValidation.length === 0 ) {
    console.log("Cuenta incorrecta")
    accountNoFound()
    return false}
  else{
    if(userAccount == accountValidation[0].account){
      console.log("Cuenta correcta")
      if(userPassword === accountValidation[0].password){
        console.log("Contraseña correcta puede entrar")
        //todo agregar funcion para ocultar modal y insertar datos en navbar
        return true
      }else {
        console.log("Error contraseña incorrecta")
        passwordtNoFound()
        return false
      }
    }else console.log("Error")
  } 
}

const accountNoFound = ()=>{
  let errorAcount = document.querySelector("#errorAccount")
  errorAcount.className = 'fadeInOut'
  setTimeout(()=>{
    errorAcount.className = ''
  },1500)
}

const passwordtNoFound = ()=>{
  let errorPassword = document.querySelector("#errorPassword")
  errorPassword.className = 'fadeInOut'
  setTimeout(()=>{
    errorPassword.className = ''
  },1500)
}

//? Evento cuando hago click inicio sesion
const btnLoginAccount = document.querySelector("#btnLoginAccount")
btnLoginAccount.addEventListener('click',userValidation)



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
    <button id="btnAddToCar">Agregar al carrito</button>
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
//todo Agregar modal 
const gamesNoFound = ()=>{
  let cardContainer = document.querySelector("#gameCardsContainer")
  cardContainer.innerHTML = `<p id="errrNoFound">No existen juegos con esas caracteristicas</p>`
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


