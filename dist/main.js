"use strict";

var resultado;
var i2 = new Impuesto(monto, deducciones);
var c2 = new Cliente(cliente, i2); // main.js

var btn = document.getElementById('calcular');
var result = document.getElementById('resultado');
btn.addEventListener('click', function () {
  var cliente = document.getElementById('cliente').value;
  var monto = document.getElementById('monto').value;
  var deducciones = document.getElementById('deducciones').value;
  i2 = new Impuesto(monto, deducciones);
  c2 = new Cliente(cliente, i2);
  c2.calcularImpuesto(parseInt(monto), parseInt(deducciones));
});