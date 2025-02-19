
// events routs
// /api/events

const { Router } = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEvento, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');

const router = Router()


//todas tienene que pasar por ls valdacion de jwt
//optener eventos

router.use(validarJWT);

router.get('/', getEvento);


router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'Fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'Fecha de finalizacion es obligatoria').custom( isDate ),
        validarCampos
    ],
     crearEvento)
    ;


router.put('/:id', actualizarEvento);


router.delete('/:id', eliminarEvento);

module.exports = router;