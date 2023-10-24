class Empleado {
    constructor(nombre = "", departamento = "Informático") {
      this.nombre = nombre;
      this.departamento = departamento;
    }
  }
  
  class DirectorEjecutivo extends Empleado {
    constructor(nombre = "") {
      super(nombre);
      this.informes = [];
    }
    agregarInforme(informe) {
      this.informes.push(informe);
    }
  }
  
  class Trabajador extends Empleado {
    constructor(nombre = "") {
      super(nombre);
      this.proyectos = [];
    }
  }
  
  class Ingeniero extends Trabajador {
    constructor(nombre = "", lenguajeProgramacion = "") {
      super(nombre);
      this.lenguajeProgramacion = lenguajeProgramacion;
    }
  }
  
  const empleado1 = new Empleado("Juan");
  const director1 = new DirectorEjecutivo("Pepito");
  const director2 = new DirectorEjecutivo("Manolo");
  const director3 = new DirectorEjecutivo("Hortensia");
  const ingeniero1 = new Ingeniero("Juan", "Java");
  const ingeniero2 = new Ingeniero("Carmen", "C++");
  const ingeniero3 = new Ingeniero("Pablo", "JavaScript");
  const ingeniero4 = new Ingeniero("Emilio", "HTML5");
  
  director1.agregarInforme("Producción enero");
  director1.agregarInforme("Producción febrero");
  director1.agregarInforme("Producción marzo");
  
  director3.agregarInforme("Informe becarios");
  
  console.log("Información del empleado:");
  console.log(`Nombre: ${empleado1.nombre}`);
  console.log(`Departamento: ${empleado1.departamento}`);
  console.log();
  
  console.log("Información del director Pepito:");
  console.log(`Nombre: ${director1.nombre}`);
  console.log(`Departamento: ${director1.departamento}`);
  console.log(`Informes: ${director1.informes}`);
  console.log();
  
  console.log("Información del director Manolo:");
  console.log(`Nombre: ${director2.nombre}`);
  console.log(`Departamento: ${director2.departamento}`);
  console.log(`Informes: ${director2.informes}`);
  console.log();
  
  console.log("Información de la directora Hortensia:");
  console.log(`Nombre: ${director3.nombre}`);
  console.log(`Departamento: ${director3.departamento}`);
  console.log(`Informes: ${director3.informes}`);
  console.log();
  
  console.log("Información del ingeniero Juan:");
  console.log(`Nombre: ${ingeniero1.nombre}`);
  console.log(`Departamento: ${ingeniero1.departamento}`);
  console.log(`Lenguaje de Programación: ${ingeniero1.lenguajeProgramacion}`);
  console.log();
  
  console.log("Información del ingeniero Carmen:");
  console.log(`Nombre: ${ingeniero2.nombre}`);
  console.log(`Departamento: ${ingeniero2.departamento}`);
  console.log(`Lenguaje de Programación: ${ingeniero2.lenguajeProgramacion}`);
  console.log();
  
  console.log("Información del ingeniero Pablo:");
  console.log(`Nombre: ${ingeniero3.nombre}`);
  console.log(`Departamento: ${ingeniero3.departamento}`);
  console.log(`Lenguaje de Programación: ${ingeniero3.lenguajeProgramacion}`);
  console.log();
  
  console.log("Información del ingeniero Emilio:");
  console.log(`Nombre: ${ingeniero4.nombre}`);
  console.log(`Departamento: ${ingeniero4.departamento}`);
  console.log(`Lenguaje de Programación: ${ingeniero4.lenguajeProgramacion}`);
  