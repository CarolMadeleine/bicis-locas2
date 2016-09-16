function validateForm(){
	var x = document.getElementById("name").value;
    var y = document.getElementById("lastname").value;
    var z = document.getElementById("input-email").value;
    var w = document.getElementById("input-password").value;
    if ( x, y, z, w == null || x, y, z, w == "") {
        var span = document.createElement("span");
		var ref = document.getElementById("name");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("ingrese su nombre");
		span.appendChild(text);

		var span = document.createElement("span");
		var ref = document.getElementById("lastname");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("ingrese su apellido");
		span.appendChild(text);

	    var span = document.createElement("span");
		var ref = document.getElementById("input-email");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("ingrese un e-mail");
		span.appendChild(text);

		var span = document.createElement("span");
		var ref = document.getElementById("input-password");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("ingrese su contraseña");
		span.appendChild(text);
    };

	


	var pass = document.getElementById("input-password").value;
        if (pass.length < 5 ){
        	var span = document.createElement("span");
			var ref = document.getElementById("input-password");
			var padre = ref.parentNode;
			padre.insertBefore(span, ref);
			var text = document.createTextNode("Contraseña al menos de 6 caracteres");
			span.appendChild(text);
        } else if(pass == "123456" || pass =="password" || pass == "098754" || /^\s+$/.test(pass)){
            var span = document.createElement("span");
			var ref = document.getElementById("input-password");
			var padre = ref.parentNode;
			padre.insertBefore(span, ref);
			var text = document.createTextNode("Por favor escriba otra contraseña");
			span.appendChild(text);
    }

   /* var x
    x = document.getElementById("input-password").value;
    if (isNaN(x) || x== "123456" || x== "098754" || x== "password" || x.length == 5 || /^\s+$/.test(x)) {
      window.alert ("No Válido") ;
    } else {
        return true;
    };*/

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var az = /^[a-zA-Z]+$/;
        if (!az.test(name) || !az.test(name)){
        	var span = document.createElement("span");
			var ref = document.getElementById("name");
			var padre = ref.parentNode;
			padre.insertBefore(span, ref);
			var text = document.createTextNode("Error: Ingresa sólo letras.");
			span.appendChild(text);
        }  
         if (!az.test(lastname) || !az.test(lastname)){
        	var span = document.createElement("span");
			var ref = document.getElementById("lastname");
			var padre = ref.parentNode;
			padre.insertBefore(span, ref);
			var text = document.createTextNode("Error: Ingresa sólo letras.");
			span.appendChild(text);
        } 
        if (name.charAt(0) == name.charAt(0).toLowerCase()){
        	var span = document.createElement("span");
			var ref = document.getElementById("name");
			var padre = ref.parentNode;
			padre.insertBefore(span, ref);
			var text = document.createTextNode("La primera letra de tu nombre debe ser Mayuscula");
			span.appendChild(text);
        } 
        if (lastname.charAt(0) == lastname.charAt(0).toLowerCase()){
        	var span = document.createElement("span");
			var ref = document.getElementById("lastname");
			var padre = ref.parentNode;
			padre.insertBefore(span, ref);
			var text = document.createTextNode("La primera letra de tu apellido debe ser Mayuscula");
			span.appendChild(text);
    };


    var email = document.getElementById("input-email").value;
    var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(email) ){
        var span = document.createElement("span");
		var ref = document.getElementById("input-email");
		var padre = ref.parentNode;
		padre.insertBefore(span, ref);
		var text = document.createTextNode("Error: La dirección de correo " + email + " es incorrecta.");
		span.appendChild(text);
    }
    
    var bici = document.getElementsByTagName("select")[0].value;
        if ( bici == 0){
        	var span = document.createElement("span");
			var ref = document.getElementByTagName("select")[0];
			var padre = ref.parentNode;
			padre.insertBefore(span, ref);
			var text = document.createTextNode("Debes seleccionar al menos un tipo de bici");
			span.appendChild(text);
	}


    /*document.body.onload = addElement;
		function addElement () { 
		  // crea un nuevo elemento div
		  // y le agrega contenido
		  var newDiv = document.createElement("div"); 
		  var newContent = document.createTextNode("Hi there and greetings!"); 
		  newDiv.appendChild(newContent); //agrega el nodo de texto al elemento div creado

		  // agrega el elemeto y su contenido al DOM.
		  var currentDiv = document.getElementById("div1");
		}*/

}
