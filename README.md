##LECCIÓN 25: BICIS - LOCAS2

####Contexto: Generar Validaciones en Globos

###Imagen
![Leccion 24-bicislocas](http://i65.tinypic.com/24l4t9h.png)

*Todos los campos son obligatorios, excepto los dos últimos*
```javascript
var x = document.getElementById("nombredelid").value;
    if (x == null || x == "") {
        alert("ERROR");
        return false;
    };
```

* El campo password debe tener al menos 6 caracteres*
* El campo password no puede ser igual a "password" ó "123456" ó "098754" *
```javascript
var x = document.getElementById("input-password").value;
    if (isNaN(x) || x== "123456" || x== "098754" || x== "password" || x.length == 5 || /^\s+$/.test(x)) {
      window.alert ("No Válido") ;
    } else {
        return true;
    };
```
