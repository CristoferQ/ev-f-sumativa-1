$('#fecha').datepicker({
    uiLibrary: 'bootstrap5'
});

$('#servicio').datetimepicker({ footer: true, modal: true });

var arreglo = new Array();
        validado = false;

        arreglo[0] = "errorRut";
        arreglo[1] = "errorDv";
        arreglo[2] = "errorNombre";
        arreglo[3] = "errorApellido";
        arreglo[4] = "errorDireccion";
        arreglo[5] = "errorComuna";
        arreglo[6] = "errorMarca";
        arreglo[7] = "errorModelo";
        arreglo[8] = "errorAño";
        function registrar(){
            if (validado){
                document.getElementById("registrado").innerHTML = "Pedido registrado, el valor a cancelar será de: "+document.getElementById("servicioSeleccionado").value + " pesos"
                document.getElementById("registrado").style.display = '';
            }
        }

        function validar(){
            var entrada = new Array();
            entrada[0] = document.getElementById("rut").value;
            entrada[1] = document.getElementById("dv").value;
            entrada[2] = document.getElementById("nombre").value;
            entrada[3] = document.getElementById("apellido").value;
            entrada[4] = document.getElementById("direccion").value;
            entrada[5] = document.getElementById("comuna").value;

            entrada[6] = document.getElementById("marca").value;
            entrada[7] = document.getElementById("modelo").value;
            entrada[8] = document.getElementById("año").value;



            var error = new Array();
            error[0] = "Ingrese el rut";
            error[1] = "Ingrese el digito verificador";
            error[2] = "Ingrese el nombre";
            error[3] = "Ingrese el apellido";
            error[4] = "Ingrese la direccion";
            error[5] = "Ingrese la comuna";
            error[6] = "Ingrese la marca";
            error[7] = "Ingrese el modelo";
            error[8] = "Ingrese el año";

            //definiendo un for-each
            for (i in entrada){ //en este caso el i toma el valor de cada elemento del array
                document.getElementById("okey").style.display = 'none';
                document.getElementById("error").style.display = 'none';
                var mensajeError = error[i];
                var valorArreglo = arreglo[i];
                if (entrada[i]==""){ 
                    document.getElementById(valorArreglo).style.color = "red";
                    document.getElementById(valorArreglo).innerHTML = mensajeError;
                    validado = false;
                }
                else if (i==0){ //rut                    
                    if (document.getElementById("rut").value.length >= 6){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "El largo del rut es incorrecto";
                        validado = false;
                    }
                }
                else if (i==1){ //DV
                    opciones = [0,1,2,3,4,5,6,7,8,9,"K","k"];
                    
                    if (opciones.includes(document.getElementById("dv").value) || opciones.includes(parseInt(document.getElementById("dv").value))){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "El digito verificador es incorrecto";
                        validado = false;;
                    }
                }
                else if (i==2){ //nombre
                    if (document.getElementById("nombre").value.length >= 2 && /^[a-zA-Z]+$/.test(document.getElementById("nombre").value)){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "El nombre es demasiado corto o contiene numeros";
                        validado = false;;
                    }
                }
                else if (i==3){ //apellido
                    if (document.getElementById("apellido").value.length >= 2 && /^[a-zA-Z]+$/.test(document.getElementById("apellido").value)){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "El apellido es demasiado corto o contiene numeros";
                        validado = false;;
                    }
                }
                else if (i==4){ //direccion
                    if (document.getElementById("direccion").value.length >= 2){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "La direccion es demasiado corta";
                        validado = false;;
                    }
                }
                else if (i==5){ //comuna
                    if (document.getElementById("comuna").value.length >= 2){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "La comuna es demasiado corta";
                        validado = false;;
                    }
                }
                else if (i==6){ //marca
                    if (document.getElementById("marca").value.length >= 2){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "La marca es demasiado corta";
                        validado = false;;
                    }
                }
                else if (i==7){ //modelo
                    if (document.getElementById("modelo").value.length >= 2){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "El modelo es demasiado corto";
                        validado = false;;
                    }
                }
                else if (i==8){ //año
                    if (document.getElementById("año").value.length >= 4){
                        document.getElementById(valorArreglo).style.color = "blue";
                        document.getElementById(valorArreglo).innerHTML = "Campo valido"
                        validado = true;
                    }else{
                        document.getElementById(valorArreglo).style.color = "red";
                        document.getElementById(valorArreglo).innerHTML = "El año es demasiado corto";
                        validado = false;;
                    }
                }

            
                else{
                    document.getElementById(valorArreglo).style.color = "blue";
                    document.getElementById(valorArreglo).innerHTML = "Campo valido"
                }
            }
            if (validado){
                document.getElementById("error").style.display = 'none';
                document.getElementById("okey").style.display = '';
                document.getElementById("okey").innerHTML = "Formulario validado"
                document.getElementById('enviar').disabled = false;
            }else{
                document.getElementById("okey").style.display = 'none';
                document.getElementById("error").style.display = '';
            }
        }
        