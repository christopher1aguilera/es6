
//clase cliente
class Cliente {
    constructor(name, Impuesto) {
        this.name = name
        this.Impuesto = Impuesto
    }
    set name(newName) {
        this._name = newName
    }
    get name() {
        return this._name
    }
//funcion
    calcularImpuesto () {
        const result = document.getElementById('resultado')
        var resultado = (this.Impuesto.monto - this.Impuesto.deducciones) * (21/100)
        result.innerHTML =this.name +" "+ resultado
        return console.log(resultado)
    }
}

export default Cliente