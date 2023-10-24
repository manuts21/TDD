const { expect } = require('chai');
const Empleado = require('./Empleado'); // Importa la clase Empleado

describe('Calcular Salario de Empleado', () => {
  it('debería calcular el salario correctamente', () => {
    const empleado1 = new Empleado("Juan", 10); // Crear un empleado con salario base de 10
    const salario = empleado1.calcularSalario(40); // Calcular el salario para 40 horas trabajadas
    expect(salario).to.equal(400); // Salario base de 10 y 40 horas trabajadas deben dar 400
  });
});

const Ingeniero = require('./Ingeniero'); // Importa la clase Ingeniero

describe('Clase Ingeniero', () => {
  it('debería establecer el lenguaje de programación correctamente', () => {
    // Crea una instancia de Ingeniero con nombre "Juan" y lenguaje "Java"
    const ingeniero1 = new Ingeniero("Juan", "Java");

    // Verifica que el nombre y lenguaje de programación sean los esperados
    expect(ingeniero1.nombre).to.equal("Juan");
    expect(ingeniero1.lenguajeProgramacion).to.equal("Java");
  });
});
