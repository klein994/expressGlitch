const productos = require('./productos.json')

const databaseProductos = {
    obtenerTodos: () => {
        return [...productos]
    },
    obtenerRamdom: () => {
       let maximo = productos.length
       let id = Math.round(Math.random() * (maximo - 1) + 1);
       return productos.filter(a => a.id === id)
    }
}

module.exports = { databaseProductos }
