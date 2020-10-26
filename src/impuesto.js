//clase impuesto

class Impuesto {
    constructor(monto, deducciones) {
        this.monto = monto
        this.deducciones = deducciones
    }
    set monto(newMonto){
        this._monto = (newMonto)
    }
    get monto(){
        return this._monto
    }
    set deducciones(newDeducciones){
        this._deducciones = newDeducciones
    }
    get deducciones(){
        return this._deducciones
    }
}

export default Impuesto