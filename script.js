document.addEventListener('DOMContentLoaded', function () {
    const grilla = document.getElementById('grilla');

    const datosJSON = [
        {"nombre": "DIRECTORIO", "interno": "INTERNO", "tag": ""},
        {"nombre": "Dr. Salvador Scafidi", "interno": "212", "tag": "DIRECTORIO"},
        {"nombre": "Lic. Pablo Scafidi", "interno": "208", "tag": "DIRECTORIO"},
        {"nombre": "Directora Médica: Dra. Romina Scafidi", "interno": "283", "tag": "DIRECTORIO"},

        {"nombre": "ADMISIONES", "interno": "INTERNO", "tag": ""},
        {"nombre": "Admision Central - Caja", "interno": "202", "tag": "ADMISIONES"},
        {"nombre": "Hoteleria", "interno": "219", "tag": "ADMISIONES"},
        {"nombre": "Admision Central  - Puestos 1 y 2", "interno": "305", "tag": "ADMISIONES"},
        {"nombre": "Admision Central  - Puestos 5 y 6", "interno": "263", "tag": "ADMISIONES"},
        {"nombre": "Admision Imágenes - Puestos 8 y 9", "interno": "230", "tag": "ADMISIONES"},
        {"nombre": "Admision Clinica Médica", "interno": "246", "tag": "ADMISIONES"},
        {"nombre": "Admision Centro Cardiopulmonar", "interno": "409", "tag": "ADMISIONES"},
        {"nombre": "Admision Centro de la Mujer", "interno": "252", "tag": "ADMISIONES"},
        {"nombre": "Admision Centro Oftalmologico", "interno": "253", "tag": "ADMISIONES"},
        {"nombre": "Admision Laboratorio", "interno": "222", "tag": "ADMISIONES"},
        {"nombre": "Admision Prosalud", "interno": "214", "tag": "ADMISIONES"},
        {"nombre": "Admision Oncohematologia", "interno": "203", "tag": "ADMISIONES"},
        {"nombre": "Admision internaciones", "interno": "228", "tag": "ADMISIONES"},
        {"nombre": "Dirección Médica", "interno": "408", "tag": "ADMISIONES"},

        {"nombre": "ADMINISTRACION - FACTURACION", "interno": "INTERNO", "tag": ""},
        {"nombre": "Gerente de Producción : -", "interno": "233", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Secretaria administración", "interno": "218", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Autorizaciones", "interno": "255", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Convenios", "interno": "359", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Facturacion Internaciones", "interno": "244", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Prefacturacion Ambulatorio", "interno": "403", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Facturacion Ambulatorio", "interno": "280", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Auditoria Médica", "interno": "358", "tag": "ADMINISTRACION - FACTURACION"},
        {"nombre": "Armado y gestion de Historias Clinicas", "interno": "227", "tag": "ADMINISTRACION - FACTURACION"},

        {"nombre": "ATENCION TELEFONICA", "interno": "INTERNO", "tag": ""},
        {"nombre": "Telefonista puesto 1", "interno": "209", "tag": "ATENCION TELEFONICA"},
        {"nombre": "Telefonista puesto 2", "interno": "225", "tag": "ATENCION TELEFONICA"},
        {"nombre": "Telefonista puesto 3", "interno": "238", "tag": "ATENCION TELEFONICA"},

        {"nombre": "COMPRAS", "interno": "INTERNO", "tag": ""},
        {"nombre": "Compras", "interno": "368", "tag": "COMPRAS"},
        {"nombre": "Depósito", "interno": "416", "tag": "COMPRAS"},

        {"nombre": "CONTABLE - FINANZAS", "interno": "INTERNO", "tag": ""},
        {"nombre": "Impuestos", "interno": "369", "tag": "CONTABLE - FINANZAS"},
        {"nombre": "Contable", "interno": "362", "tag": "CONTABLE - FINANZAS"},
        {"nombre": "Finanzas", "interno": "365", "tag": "CONTABLE - FINANZAS"},
        {"nombre": "Tesoreria", "interno": "216", "tag": "CONTABLE - FINANZAS"},

        {"nombre": "IMÁGENES", "interno": "INTERNO", "tag": ""},
        {"nombre": "Referente : Samanta Ivacachi", "interno": "234", "tag": "IMÁGENES"},
        {"nombre": "Sala Resonador Essenza", "interno": "248", "tag": "IMÁGENES"},
        {"nombre": "Sala Resonador Altea", "interno": "402", "tag": "IMÁGENES"},
        {"nombre": "Sala Tomografia", "interno": "224", "tag": "IMÁGENES"},
        {"nombre": "Sala Rayos X", "interno": "414", "tag": "IMÁGENES"},
        {"nombre": "Sala Informe imágenes", "interno": "232", "tag": "IMÁGENES"},
        {"nombre": "Tomógrafo Canon", "interno": "417", "tag": "IMÁGENES"},
        {"nombre": "Tipeadores", "interno": "229", "tag": "IMÁGENES"},

        {"nombre": "LABORATORIO - HEMOTERAPIA", "interno": "INTERNO", "tag": ""},
        {"nombre": "Bioq. Aldo Bucci", "interno": "210", "tag": "LABORATORIO - HEMOTERAPIA"},
        {"nombre": "Laboratorio", "interno": "285", "tag": "LABORATORIO - HEMOTERAPIA"},
        {"nombre": "Hemoterapia", "interno": "284", "tag": "LABORATORIO - HEMOTERAPIA"},
        {"nombre": "Prefacturacion Laboratorio", "interno": "404", "tag": "LABORATORIO - HEMOTERAPIA"},

        {"nombre": "MEDICINA LABORAL", "interno": "INTERNO", "tag": ""},
        {"nombre": "Referente: Hilda Aguilera", "interno": "251", "tag": "MEDICINA LABORAL"},
        {"nombre": "Facturación - Salud Ocupacional", "interno": "357", "tag": "MEDICINA LABORAL"},
        {"nombre": "Autorizaciones", "interno": "250", "tag": "MEDICINA LABORAL"},
        {"nombre": "Admision Laboral - Admisión Rehabilitación", "interno": "214 - 206", "tag": "MEDICINA LABORAL"},

        {"nombre": "SECTORES Y SERVICIOS", "interno": "INTERNO", "tag": ""},
        {"nombre": "Servicio de Alimentación", "interno": "257", "tag": "SECTORES Y SERVICIOS, COCINA"},
        {"nombre": "Snack", "interno": "410", "tag": "SECTORES Y SERVICIOS, COCINA"},
        {"nombre": "Control De Infecciones", "interno": "261", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Centro De La Mujer - Informes", "interno": "249", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Centro Cardiopulmonar - Cardiologia", "interno": "409", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Consultorio 6 Guardia", "interno": "220", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Consultorio 7 Guardia", "interno": "226", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Consultorio 3 Guardia Emergencias", "interno": "223", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Consultorio 2 Guardia Enfermeria", "interno": "231", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Cuidados Progresivos : Enfermeros", "interno": "282", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Cuidados Progresivos : Médicos", "interno": "281", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Endoscopia y Litotricia", "interno": "406", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Enfermería Piso 2 Libertad", "interno": "241", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Enfermería Piso 2 San Martin", "interno": "242", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Enfermería Piso 2 Libertad", "interno": "301", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Enfermería Piso 3 Libertad", "interno": "240", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Enfermería Piso 3 San Martin", "interno": "401", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Quirófano", "interno": "245", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Secretaria Quirófano", "interno": "287", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Esterilización", "interno": "254", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Hemodinamia", "interno": "415", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Pediatría Office", "interno": "259", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Neonatología", "interno": "237", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Aula Medica 1", "interno": "269", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Aula Medica 2", "interno": "262", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "UTI Adultos A Enfermería", "interno": "235", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "UTI Adultos A Médicos", "interno": "239", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "UTI Adultos B Enfermería", "interno": "308", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "UTI Adultos B Médicos", "interno": "350", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Unidad Coronaria", "interno": "407", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Hospital  de día", "interno": "405", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Maternidad", "interno": "405", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Mantenimiento Corporativo", "interno": "155830591", "tag": "SECTORES Y SERVICIOS"},
        {"nombre": "Referentes Mucamas", "interno": "155571705", "tag": "SECTORES Y SERVICIOS"},

        {"nombre": "RECURSOS HUMANOS", "interno": "INTERNO", "tag": ""},
        {"nombre": "Gerencia RRHH: Gabino Castillo", "interno": "367", "tag": "RECURSOS HUMANOS"},
        {"nombre": "Atencion a Profesionales", "interno": "351", "tag": "RECURSOS HUMANOS"},
        {"nombre": "RRHH - Estela Nahuel", "interno": "258", "tag": "RECURSOS HUMANOS"},
        {"nombre": "RRHH - Erika Morales | Laura Bowen", "interno": "275", "tag": "RECURSOS HUMANOS"},
        {"nombre": "Comunicaciones", "interno": "2996048776", "tag": "RECURSOS HUMANOS"},

        {"nombre": "SISTEMAS", "interno": "INTERNO", "tag": ""},
        {"nombre": "Gerencia TIC : Daniel Iuzzolino", "interno": "364", "tag": "SISTEMAS"},
        {"nombre": "Atencion al usuario", "interno": "360/361", "tag": "SISTEMAS"},
        {"nombre": "Tecnologia e Infraestructura", "interno": "361", "tag": "SISTEMAS"},
        {"nombre": "Desarrollo", "interno": "364", "tag": "SISTEMAS"},

        {"nombre": "SUMINISTROS - FARMACIA", "interno": "INTERNO", "tag": "SUMINISTROS - FARMACIA"},
        {"nombre": "Direccion Tecnica", "interno": "370", "tag": "SUMINISTROS - FARMACIA"},
        {"nombre": "Suministros", "interno": "260", "tag": "SUMINISTROS - FARMACIA"}
    ];

    const tabla = document.createElement('table');
    const tbody = document.createElement('tbody');

    // Agregar filas de datos
    datosJSON.forEach(obj => {
        const fila = tbody.insertRow();
        const { nombre, interno, tag } = obj; // Obtener todas las propiedades del objeto

        const cellNombre = fila.insertCell();
        cellNombre.textContent = nombre;

        const cellInterno = fila.insertCell();
        cellInterno.textContent = interno;

        // Agregar el atributo "data-tag" a la fila para utilizarlo en la búsqueda
        fila.dataset.tag = tag;

        // Aplicar estilo a filas con la palabra "INTERNO"
        if (interno === 'INTERNO') {
            fila.classList.add('fila-interno');
        }
    });

    // Agregar el cuerpo de la tabla a la tabla
    tabla.appendChild(tbody);

    // Barra de búsqueda
    const busquedaInput = document.getElementById('busqueda');

    busquedaInput.addEventListener('input', function () {
        const textoBusqueda = busquedaInput.value.trim().toLowerCase(); // Convertir a minúsculas y eliminar espacios al principio y al final

        Array.from(tabla.rows).forEach(fila => {
            const textoFila = Array.from(fila.cells).map(cell => cell.textContent.trim().toLowerCase()).join(''); // Concatenar texto de todas las celdas de la fila
            const tagFila = fila.dataset.tag ? fila.dataset.tag.trim().toLowerCase() : ''; // Obtener el valor del atributo "data-tag" de la fila

            // Comparar texto de la fila y del tag con el texto de búsqueda
            if (textoFila.includes(textoBusqueda) || tagFila.includes(textoBusqueda)) {
                fila.style.display = ''; // Mostrar la fila si hay coincidencia
            } else {
                fila.style.display = 'none'; // Ocultar la fila si no hay coincidencia
            }
        });
    });

    // Agregar la tabla al elemento 'grilla'
    grilla.appendChild(tabla);
});