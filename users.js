class User {
  constructor (name,account,password,email){
    this.name = name      
    this.account = account    
    this.password = password    
    this.email = email        
  }
}

const Users = [
  new User ("Raul Corral","raul.corral","qwe123","rcorral@gmail.com"),
  new User ("Laura Garza","laura.garza","qwe123","laurita.garza@gmail.com"),
  new User ("Administrador", "admin", "123", "admin@gmail.com"),
]
//console.log(Users)