
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
  //!! Cuenta inicial  
/* 
  let logIn = () => {
    let userAccount = document.querySelector("#userAccount").value
    let userPassword = document.querySelector("#userPassword").value
    let loginModalClose = document.querySelector("#loginModalClose")
    // console.log(userAccount,userPassword) 
    let accountValidation = Users.filter(account => account.account == userAccount)
    let [{account,password,email}] = accountValidation
    console.log(account,password,email)
     console.log(accountValidation) 
    if (accountValidation) {
      // console.log("Cuenta incorrecta") 
      swal.fire(msjErrorSweetAlert("Cuenta incorrecta","Intente de nuevo","error"))
      return false
    }else{
      if(userAccount == accountValidation[0].account){
        //console.log("Cuenta correcta")
        if(userPassword === accountValidation[0].password){
          //console.log("Contraseña correcta puede entrar")
          swal.fire(msjErrorSweetAlert("Exito","Cuenta y contraseña correcta","success"))
          setTimeout(() => {loginModalClose.click()}, 1200);
          removeLoginMenu()
          setloggedMenu()
          //console.log(accountValidation )
          setLocalStorageAccount(accountValidation)  
        }else {
          // console.log("Error contraseña incorrecta")
          swal.fire(msjErrorSweetAlert("Contraseña incorrecta","Intente de nuevo","error"))
          return false
        }
      }else swal.fire(msjErrorSweetAlert("Cuenta incorrecta","Intente de nuevo","error"))
    } 
  }
   */