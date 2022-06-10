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
          }}