const boton1 = document.getElementById('boton1')
boton1.addEventListener('click', () => {
  var tipoCategoria = new String()
  var valorCompra = new Number()
  var totalpag = new Number()
  var descuento = new Number()

  tipoCategoria = prompt('Ingrese su categoría en letra mayúscula: ')

  switch (tipoCategoria) {
    case 'A':
      valorCompra = Number(prompt('Ingrese el valor se su compra'))
      descuento = 0.1 * valorCompra
      totalpag = valorCompra - descuento
      document.getElementById('subTotal').innerHTML = valorCompra
      document.getElementById('descuento').innerHTML = descuento
      document.getElementById('total').innerHTML = totalpag
      document.getElementById('categoria').innerHTML = tipoCategoria
      break
    case 'B':
      valorCompra = Number(prompt('Ingrese el valor se su compra'))
      descuento = 0.15 * valorCompra
      totalpag = valorCompra - descuento
      document.getElementById('subTotal').innerHTML = valorCompra
      document.getElementById('descuento').innerHTML = descuento
      document.getElementById('total').innerHTML = totalpag
      break
    case 'C':
      valorCompra = Number(prompt('Ingrese el valor se su compra'))
      descuento = 0.2 * valorCompra
      totalpag = valorCompra - descuento
      document.getElementById('subTotal').innerHTML = valorCompra
      document.getElementById('descuento').innerHTML = descuento
      document.getElementById('total').innerHTML = totalpag
      break
    default:
      document.write(
        'Categoría ingresada incorectamente vuelva a ingresarla',
        '<BR/>',
      )
  }
})
