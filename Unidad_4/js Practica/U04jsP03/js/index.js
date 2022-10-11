
let nombre;
nombre = prompt('Ingrese el nombre del postulante');
let cantpreguntas;
cantpreguntas = parseInt(prompt('Cantidad de preguntas del test'));
let cantcorrectas;
cantcorrectas = parseInt(prompt('Cantidad de preguntas correctas'));
let porcentaje;
porcentaje = cantcorrectas / cantpreguntas * 100;
if (porcentaje >= 90) {
    document.write('Nivel superior');
} else {
    if (porcentaje >= 75) {
        document.write('Nivel medio');
    } else {
        if (porcentaje >= 50) {
            document.write('Nivel regular');
        } else {
            document.write('Fuera de nivel');
        }
    }
}

