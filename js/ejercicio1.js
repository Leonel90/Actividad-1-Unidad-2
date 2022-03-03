const boton1 = document.getElementById('boton1')
boton1.addEventListener('click', () => {
  var tipoCategoria = new String()
  var valorCompra = new Number()
  var totalpag = new Number()
  var descuento = new Number()

  /* document.write("---- TIPOS DE CATEGORÌA ----", '<BR/>');
    document.write("------------------------------------------------------", '<BR/>');
    document.write("Tipo A --> 10% de Descuento", '<BR/>');
    document.write("Tipo B --> 15% de Descuento", '<BR/>');
    document.write("Tipo C --> 20% de Descuento", '<BR/>');
    document.write("------------------------------------------------------", '<BR/>');*/
  tipoCategoria = prompt('Ingrese su categoría: ')

  switch (tipoCategoria) {
    case ('a,A'):
      valorCompra = Number(prompt('Ingrese el valor se su compra'))
      descuento = 0.1 * valorCompra
      totalpag = valorCompra - descuento
      document.getElementById('subTotal').innerHTML = valorCompra
      document.getElementById('descuento').innerHTML = descuento
      document.getElementById('total').innerHTML = totalpag
      break
    case ('b', 'B'):
      document.write('Ingrese el Valor de su compra', '<BR/>')
      valorCompra = Number(prompt())
      descuento = 0.15 * valorCompra
      totalpag = valorCompra - descuento
      document.getElementById('subTotal').innerHTML = valorCompra
      document.getElementById('descuento').innerHTML = descuento
      document.getElementById('total').innerHTML = totalpag
      break
    case ('c', 'C'):
      document.write('Ingrese el Valor de su compra', '<BR/>')
      valorCompra = Number(prompt())
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
