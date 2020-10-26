//ccomportamiento de la pagina
import Cliente from "./cliente.js"
import Impuesto from "./impuesto.js"

// main.js
let clie = []
let impu = []
const btn = document.getElementById('calcular')
btn.addEventListener('click', () =>{
  const name = document.getElementById('cliente').value;
  const monto = document.getElementById('monto').value;
  const deducciones = document.getElementById('deducciones').value;
var i2 = new Impuesto(monto, deducciones)
var c2 = new Cliente(name, i2)

c2.calcularImpuesto(parseInt(monto), parseInt(deducciones))
if (impu == [] || clie == []) {
  impu.push(i2)
  clie.push(c2)
  console.log("hola")
  }
    console.log(i2)
    console.log(c2)
//modificar archivos
// console.log(cliente.getNombre())
// cliente.setname("el peor")
// console.log(cliente.getNombre()) //get acceder datos
// c2.setNombre("christo")
// console.log(chris.getNombre())// set modifica arrays
// p2.setEdad("10000")
// console.log(chris.getEdad())
// p2.setRut("Cielo")
// console.log(chris.getRut())
// p2.setDiagnostico("Dios")
// console.log(chris.getDiagnostico())
})
