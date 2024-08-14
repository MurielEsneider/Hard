class Matrimonio {
    constructor(fecha, lugar, contrayente1, contrayente2, testigo1, testigo2, autoridad) {
        this.fecha = fecha;
        this.lugar = lugar;
        this.contrayente1 = contrayente1;
        this.contrayente2 = contrayente2;
        this.testigo1 = testigo1;
        this.testigo2 = testigo2;
        this.autoridad = autoridad;
    }
}

class Persona {
    constructor(nombre, apellidos, edad, sexo, domicilio) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.sexo = sexo;
        this.domicilio = domicilio;
    }
}

class Contrayente extends Persona {}

class Testigo extends Persona {}

class Autoridad extends Persona {
    constructor(nombre, apellidos, edad, sexo, domicilio, cargo) {
        super(nombre, apellidos, edad, sexo, domicilio);
        this.cargo = cargo; 
    }
}

let contrayente1 = new Contrayente("Eduardo", "Lopez", 23, "Masculino", "Calle22");
let contrayente2 = new Contrayente("Lucia", "Martinez", 21, "Femenino", "Calle12");

let testigo1 = new Testigo("Juan", "Madroñero", 20, "Masculino", "Calle12");
let testigo2 = new Testigo("Mafe", "Ortega", 15, "Femenino", "Calle11");

let autoridadCivil = new Autoridad("José", "Ramiro", 70, "Masculino", "Iglesia", "Pastor");

let matrimonio = new Matrimonio(new Date(), "Popayán", contrayente1, contrayente2, testigo1, testigo2, autoridadCivil);

console.log(matrimonio);
