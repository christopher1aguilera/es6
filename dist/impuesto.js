"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Impuesto = /*#__PURE__*/function () {
  function Impuesto(monto, deducciones) {
    _classCallCheck(this, Impuesto);

    this.monto = monto;
    this.deducciones = deducciones;
  }

  _createClass(Impuesto, [{
    key: "monto",
    set: function set(newMonto) {
      this._monto = newMonto;
    },
    get: function get() {
      return this._monto;
    }
  }, {
    key: "deducciones",
    set: function set(newDeducciones) {
      this._deducciones = newDeducciones;
    },
    get: function get() {
      return this._deducciones;
    }
  }]);

  return Impuesto;
}();