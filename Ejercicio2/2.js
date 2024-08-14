
class Empresa {
  constructor(nombre) {
    this.nombre = nombre;
    this.empleados = [];
    this.clientes = [];
  }
  agregarEmpleado(empleado) {
    this.empleados.push(empleado);
  }
  agregarCliente(cliente) {
    this.clientes.push(cliente);
  }
  mostrarDatos() {
    console.log("Empresa: " + this.nombre);
    console.log("Empleados:");
    this.empleados.forEach(emp => emp.mostrarDatos());
    console.log("Clientes:");
    this.clientes.forEach(cli => cli.mostrarDatos());
  }
}


class Empleado {
  constructor(nombre, edad, sueldoBruto) {
    this.nombre = nombre;
    this.edad = edad;
    this.sueldoBruto = sueldoBruto;
    }
  mostrarDatos() {
    console.log("Empleado: " +this.nombre,", Edad: " + this.edad +", Sueldo Bruto: " + this.sueldoBruto);
  }
}

class Cliente {
  constructor(nombre, edad, telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
    }
  mostrarDatos() {
    console.log("Cliente: " +this.nombre + ", Edad: " + this.edad + ", Teléfono: " + this.telefono);
  }
}

class Directivo extends Empleado {
  constructor(nombre, edad, sueldoBruto, categoria) {
    super(nombre, edad, sueldoBruto);
    this.categoria = categoria;
    this.subordinados = []; 
  }

  agregarSubordinado(subordinado) {
    this.subordinados.push(subordinado);
  }

  mostrarDatos() {
    super.mostrarDatos();
    console.log("Categoría: " + this.categoria);
    console.log("Subordinados: ");
    this.subordinados.forEach(sub => sub.mostrarDatos());
  }
}


  let empresa = new Empresa("Urbant Point");
  let empleado1 = new Empleado("Ana María", 20, 1000000);
  let empleado2 = new Empleado("Eduardo Lopez", 18, 4500000);
  let directivo = new Directivo("Juan Benavides", 25, 80000, "Director");
  let cliente1 = new Cliente("Jhojan Muriel", 21, "31377401232");
  let cliente2 = new Cliente("Camila Ordoñez", 20, "1234456788");
  empresa.agregarEmpleado(directivo);
  directivo.agregarSubordinado(empleado1);
  empresa.agregarEmpleado(empleado2);
  empresa.agregarCliente(cliente1);
  empresa.agregarCliente(cliente2);

  empresa.mostrarDatos();
