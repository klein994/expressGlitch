const { databaseProductos } = require("../database/databaseProductos.js")



const controladoresApi = {
    root: (req, res) => {
        res.redirect('/productos');
    },
    productos: (req, res) => {
        res.json(databaseProductos.obtenerTodos())
    },
    productoRandom: (req, res) => {
        res.json(databaseProductos.obtenerRamdom())
    }
}

module.exports = { controladoresApi }
