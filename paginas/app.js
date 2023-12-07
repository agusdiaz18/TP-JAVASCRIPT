function calcularTotal() {

   //var name = document.getElementById('nombre');
   //var apell = document.getElementById('apellido');

   // mail
   const cant = document.getElementById('cantidad');
   const valor = document.getElementById('categoria');

//   if(name.value==="" || apell.value==="" || mail.value==="" || cantidad.value==="" || categoria.value==="") {
      //alert('Complete el nombre de la persona que esta por realizar la compra de ticket');
      //name.focus();
      //alert("Debe completar todos los campos");
//   }
   if(/^(?!.* $)[A-Z][a-z ]+$/.test(nombre.value)){
         nombre.classList.remove("is-invalid");
      }
   else if(nombre.value==="") {
      nombre.classList.add("is-invalid");   
      nombre.focus();
   }
    /*
   function validarMail(){
      return /\S+@\S+\.\S+/.test(mail.value);
   }*/
   const validarMail = mail =>
   {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/.test(mail.value);
   }

   if(!validarMail(mail)){
      mail.classList.add("is-invalid");   
      mail.focus();
      // alert("Error!!!!");
   }
   else {
      mail.classList.remove("is-invalid");
   }
  
   
   if(valor.value==0) {resumenTotal = 200*cant.value;}
   if(valor.value==1) {resumenTotal = (200*0.5)*cant.value;}
   if(valor.value==2) {resumenTotal = (200*.2)*cant.value;}
   if(valor.value==3) {resumenTotal = (200*.15)*cant.value;}

   document.getElementById('totalPagar').innerText = resumenTotal;

}


const BTNCLIK = document.getElementById('btnResumen');
BTNCLIK.addEventListener('click',calcularTotal);