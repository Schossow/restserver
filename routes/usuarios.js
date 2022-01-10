const {Router} = require('express')
const { usuariosGet } = require('../controllers/usuarios')

const router = Router()

router.post('/', usuariosGet)

module.exports = router