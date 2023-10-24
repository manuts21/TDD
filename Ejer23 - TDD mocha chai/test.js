const { expect } = require('chai');
const Empleado = require('./Empleado'); // Importa la clase Empleado

describe('Calcular Salario de Empleado', () => {
  it('debería calcular el salario correctamente', () => {
    const empleado1 = new Empleado("Juan", 10); // Crear un empleado con salario base de 10
    const salario = empleado1.calcularSalario(40); // Calcular el salario para 40 horas trabajadas
    expect(salario).to.equal(400); // Salario base de 10 y 40 horas trabajadas deben dar 400
  });
});
