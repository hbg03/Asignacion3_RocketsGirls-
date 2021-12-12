var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
 inputs[i].addEventListener('keyup', function(){
  if(this.value.lenght>=1) {
  this.nextElementSibling.classList.add('fijar') ;
} else {
    this.nextElementSiblig.classList.remove('fijar') ;
}
}) ;
}

function validarFormulario(evObject) {
    evObject.preventDefault();
    var todoCorrecto = true;
    for (var i=0; i<inputs.length; i++) {
        if(inputs[i].type =='text') {    
           if (inputs[i].value == null || inputs[i].value.length == 0 || /^\s*$/.test(inputs[i].value)){    
             alert (inputs[i].name+ ' no puede estar vacío o contener sólo espacios en blanco');
             todoCorrecto=false;
            }
        }
    
    }
}