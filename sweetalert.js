//? Mensaje sweet alert, para error
const msjErrorSweetAlert =(titulo,mensaje,icon) => {
  return {
    title:titulo,
    text:mensaje,
    icon:icon,
    background: '#212529',
    color: '#ffffff',
    timer:1000  ,
    confirmButtonColor: '#3085d6',
    showConfirmButton: false,
  }
}

const msjConfirmSweetAlert = (titulo,mensaje,icon,btnMsj) =>{
  return {
    title: titulo,
    text: mensaje,
    icon: icon,
    background: '#212529',
    color: '#ffffff',
    showCancelButton: true,
    confirmButtonColor: '#588a1b',
    cancelButtonColor: '#d68b00',
    confirmButtonText: btnMsj
  }
}

const successAction = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1000,
  
})

