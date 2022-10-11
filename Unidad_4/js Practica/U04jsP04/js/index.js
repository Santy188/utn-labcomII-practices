function IngresarDatos() {
    let datos = [prompt('Nombre'), prompt('Apellido'), prompt('Domicilio'), prompt('Curso'), prompt('Carrera'), prompt('Materia'), prompt('Nota primer parcial')]
    document.writeln(datos[0] + '<br>' + datos[1] + '<br>' + datos[2] + '<br>' + datos[3] + '<br>' + datos[4] + '<br>'+ datos[5] + '<br>' + datos[6] + '<br>');

}
        