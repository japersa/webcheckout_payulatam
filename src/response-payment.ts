export class ResponsePaymentDto {
  readonly merchantId: string;
  readonly merchant_name: string;
  readonly merchant_address: string;
  readonly telephone: string;
  readonly merchant_url: string;
  readonly transactionState: string;
  readonly lapTransactionState: string;
  readonly message: string;
  readonly referenceCode: string;
  readonly reference_pol: string;
  readonly transactionId: string;
  readonly description: string;
  readonly trazabilityCode: string;
  readonly cus: string;
  readonly orderLanguage: string;
  readonly extra1: string;
  readonly extra2: string;
  readonly extra3: string;
  readonly polTransactionState: string;
  readonly signature: string;
  readonly polResponseCode: string;
  readonly lapResponseCode: string;
  readonly risk: string;
  readonly polPaymentMethod: string;
  readonly lapPaymentMethod: string;
  readonly polPaymentMethodType: string;
  readonly lapPaymentMethodType: string;
  readonly installmentsNumber: string;
  readonly TX_VALUE: string;
  readonly TX_TAX: string;
  readonly currency: string;
  readonly lng: string;
  readonly pseCycle: string;
  readonly buyerEmail: string;
  readonly pseBank: string;
  readonly pseReference1: string;
  readonly pseReference2: string;
  readonly pseReference3: string;
  readonly authorizationCode: string;
  readonly processingDate: string;
}
