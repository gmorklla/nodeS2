var express = require('express');
var router = express.Router();

router.all('/*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type, responseType, Authorization');
    res.header('Access-Control-Allow-Methods', 'OPTIONS,POST,GET');
    next();
});

const catalogo = [{
        "id": 1021,
        "type": "tel",
        "description": "Teléfono1",
        "isAsync": 1
    },
    {
        "id": 37,
        "type": "text",
        "description": "vali123",
        "isAsync": 0
    },
    {
        "id": 38,
        "type": "text",
        "description": "pruebaVal1234",
        "isAsync": 0
    },
    {
        "id": 190,
        "type": "text",
        "description": "Minlenght10MaxLengh20",
        "isAsync": 0
    },
    {
        "id": 302,
        "type": "text",
        "description": "Requerido input file",
        "isAsync": 0
    },
    {
        "id": 321,
        "type": "text",
        "description": "código 6 dígitos",
        "isAsync": 0
    },
    {
        "id": 1041,
        "type": "text",
        "description": "Requerido Radio",
        "isAsync": 0
    },
    {
        "id": 1101,
        "type": "text",
        "description": "protocolo_SIC",
        "isAsync": 0
    },
    {
        "id": 125,
        "type": "email",
        "description": "Correo",
        "isAsync": 0
    },
    {
        "id": 521,
        "type": "text",
        "description": "protocolo_celularConfirmado",
        "isAsync": 0
    },
    {
        "id": 581,
        "type": "text",
        "description": "protocolo_codigoSeguridad",
        "isAsync": 0
    },
    {
        "id": 622,
        "type": "number",
        "description": "bugTelNum",
        "isAsync": 0
    },
    {
        "id": 781,
        "type": "text",
        "description": "protocolo_SIC2",
        "isAsync": 0
    },
    {
        "id": 281,
        "type": "text",
        "description": "validacionCurp",
        "isAsync": 0
    },
    {
        "id": 401,
        "type": "text",
        "description": "NumeroTelefono",
        "isAsync": 0
    },
    {
        "id": 941,
        "type": "tel",
        "description": "MontoFormato",
        "isAsync": 0
    },
    {
        "id": 81,
        "type": "number",
        "description": "asyncTest",
        "isAsync": 1
    },
    {
        "id": 463,
        "type": "text",
        "description": "patternCorreo",
        "isAsync": 0
    },
    {
        "id": 961,
        "type": "text",
        "description": "protocolo_segundoApellido",
        "isAsync": 0
    },
    {
        "id": 962,
        "type": "text",
        "description": "protocolo_nombreCliente",
        "isAsync": 0
    },
    {
        "id": 963,
        "type": "text",
        "description": "protocolo_primerApellido",
        "isAsync": 0
    },
    {
        "id": 964,
        "type": "text",
        "description": "protocolo_rfc",
        "isAsync": 0
    },
    {
        "id": 965,
        "type": "text",
        "description": "protocolo_curp",
        "isAsync": 0
    },
    {
        "id": 185,
        "type": "number",
        "description": "Requerido number",
        "isAsync": 0
    },
    {
        "id": 721,
        "type": "number",
        "description": "Validación de monto de inversión",
        "isAsync": 1
    },
    {
        "id": 741,
        "type": "text",
        "description": "RequeridoAJAX",
        "isAsync": 1
    },
    {
        "id": 966,
        "type": "text",
        "description": "protocolo_fechaNacimiento",
        "isAsync": 0
    },
    {
        "id": 967,
        "type": "text",
        "description": "protocolo_genero",
        "isAsync": 0
    },
    {
        "id": 968,
        "type": "text",
        "description": "protocolo_estadoCivil",
        "isAsync": 0
    },
    {
        "id": 969,
        "type": "text",
        "description": "protocolo_titulo",
        "isAsync": 0
    },
    {
        "id": 970,
        "type": "text",
        "description": "protocolo_tipoDomicilio",
        "isAsync": 0
    },
    {
        "id": 971,
        "type": "text",
        "description": "protocolo_colonia",
        "isAsync": 0
    },
    {
        "id": 2,
        "type": "text",
        "description": "Teléfono móvil",
        "isAsync": 0
    },
    {
        "id": 972,
        "type": "text",
        "description": "protocolo_codEstado",
        "isAsync": 0
    },
    {
        "id": 973,
        "type": "text",
        "description": "protocolo_codPais",
        "isAsync": 0
    },
    {
        "id": 974,
        "type": "text",
        "description": "protocolo_codTipoVivienda",
        "isAsync": 0
    },
    {
        "id": 975,
        "type": "text",
        "description": "protocolo_celular",
        "isAsync": 0
    },
    {
        "id": 976,
        "type": "text",
        "description": "protocolo_correoElectronico",
        "isAsync": 0
    },
    {
        "id": 977,
        "type": "text",
        "description": "protocolo_cno",
        "isAsync": 0
    },
    {
        "id": 978,
        "type": "text",
        "description": "protocolo_cargoPolitico",
        "isAsync": 0
    },
    {
        "id": 979,
        "type": "text",
        "description": "protocolo_nacionalidad",
        "isAsync": 0
    },
    {
        "id": 1001,
        "type": "text",
        "description": "protocolo_codDelegacion",
        "isAsync": 0
    },
    {
        "id": 1121,
        "type": "tel",
        "description": "testTel",
        "isAsync": 0
    },
    {
        "id": 841,
        "type": "tel",
        "description": "bugTest3",
        "isAsync": 0
    },
    {
        "id": 801,
        "type": "text",
        "description": "protocolo_Tel. casa",
        "isAsync": 0
    },
    {
        "id": 821,
        "type": "text",
        "description": "protocolo_SIC3",
        "isAsync": 0
    },
    {
        "id": 187,
        "type": "text",
        "description": "Requerido",
        "isAsync": 0
    },
    {
        "id": 1081,
        "type": "text",
        "description": "protocolo_Campo 1m",
        "isAsync": 0
    },
    {
        "id": 83,
        "type": "text",
        "description": "requeridoSimple",
        "isAsync": 0
    },
    {
        "id": 201,
        "type": "text",
        "description": "Sólo requerido",
        "isAsync": 0
    },
    {
        "id": 157,
        "type": "text",
        "description": "hector",
        "isAsync": 0
    },
    {
        "id": 261,
        "type": "number",
        "description": "Código seguridad",
        "isAsync": 0
    },
    {
        "id": 161,
        "type": "number",
        "description": "REQUERIDO FINAL",
        "isAsync": 0
    },
    {
        "id": 301,
        "type": "text",
        "description": "RequeridoMinlenght5MaxLength10",
        "isAsync": 0
    },
    {
        "id": 561,
        "type": "text",
        "description": "protocolo_correoElectronicoConfirmado",
        "isAsync": 0
    },
    {
        "id": 661,
        "type": "number",
        "description": "Linea de crédito",
        "isAsync": 0
    },
    {
        "id": 681,
        "type": "number",
        "description": "RangerTest",
        "isAsync": 1
    },
    {
        "id": 701,
        "type": "text",
        "description": "AsyncTestTextarea",
        "isAsync": 1
    },
    {
        "id": 882,
        "type": "text",
        "description": "protocolo_fechaOp",
        "isAsync": 0
    },
    {
        "id": 921,
        "type": "tel",
        "description": "bugTest4",
        "isAsync": 0
    },
    {
        "id": 981,
        "type": "text",
        "description": "protocolo_codTipoVialidad",
        "isAsync": 0
    },
    {
        "id": 982,
        "type": "text",
        "description": "protocolo_nombreCalle",
        "isAsync": 0
    },
    {
        "id": 983,
        "type": "text",
        "description": "protocolo_numeroExterior",
        "isAsync": 0
    },
    {
        "id": 984,
        "type": "text",
        "description": "protocolo_entrada",
        "isAsync": 0
    },
    {
        "id": 985,
        "type": "text",
        "description": "protocolo_piso",
        "isAsync": 0
    },
    {
        "id": 151,
        "type": "number",
        "description": "Mi validacion 0002",
        "isAsync": 1
    },
    {
        "id": 986,
        "type": "text",
        "description": "protocolo_departamento",
        "isAsync": 0
    },
    {
        "id": 184,
        "type": "number",
        "description": "Requerido, Mínimo y Máximo",
        "isAsync": 0
    },
    {
        "id": 202,
        "type": "number",
        "description": "código requerido",
        "isAsync": 0
    },
    {
        "id": 221,
        "type": "text",
        "description": "Código postal",
        "isAsync": 1
    },
    {
        "id": 422,
        "type": "number",
        "description": "bugTest2",
        "isAsync": 0
    },
    {
        "id": 987,
        "type": "text",
        "description": "protocolo_codigoPostal",
        "isAsync": 0
    },
    {
        "id": 601,
        "type": "text",
        "description": "protocolo_comentarios",
        "isAsync": 0
    },
    {
        "id": 1061,
        "type": "text",
        "description": "protocolo_email",
        "isAsync": 0
    },
    {
        "id": 1122,
        "type": "tel",
        "description": "testMonto",
        "isAsync": 0
    }
];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.json(catalogo);
});

module.exports = router;
