var api = {
    url: 'http://laboratoria.cuadra.co:9339/api/v1/students/'
};
var plantilla = '<li>__num__.<input type="checkbox"> __nombre__</li>';

var crearLista = function (alumna) {
    var plantillaFinal = "";
    
    plantillaFinal = plantilla.replace("__num__", alumna.id)
        .replace("__nombre__", alumna.name + alumna.pLastName + alumna.mLastName);
    
    $('#listaAlumnas').append(plantillaFinal);
};
var alumnas = function () {
    $.getJSON(api.url, function (alumnas) {
        alumnas.forEach(crearLista);
        });
};

$(document).ready(alumnas);

