export default {
  // $url: 'https://checkout.payulatam.com/ppp-web-gateway-payu/', // Producción
  url: 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/', // Sandbox
  ApiKey: '4Vj8eK4rloUd272L48hsrarnUA', // Obtener este dato dela cuenta de Payu
  merchantId: '508029', // Obtener este dato dela cuenta de Payu
  accountId: '512321', // Obtener este dato dela cuenta de Payu
  description: 'Compra suscripción', //Descripción del pedido
  referenceCode: '', // Referencia Unica del pedido
  amount: '20000', //Es el monto total de la transacción. Puede contener dos dígitos decimales. Ej. 10000.00 ó 10000.
  tax: '3193', // Es el valor del IVA de la transacción, si se envía el IVA nulo el sistema aplicará el 19% automáticamente. Puede contener dos dígitos decimales. Ej: 19000.00. En caso de no tener IVA debe enviarse en 0.
  taxReturnBase: '16806', // Es el valor base sobre el cual se calcula el IVA. En caso de que no tenga IVA debe enviarse en 0.
  currency: 'COP', // Moneda
  test: '1', // Variable para poder utilizar tarjetas de crédito de pruebas, los valores pueden ser 1 ó 0.
  buyerEmail: 'japersa92@gmail.com', // Respuesta por Payu al comprador
  responseUrl: 'http://localhost:3000/response', // URL de respuesta,
  confirmationUrl: 'http://localhost:3000/confirmation', // URL de confirmación
  confirmacionEmail: 'japersa92@gmail.com', // Confirmación email
};
