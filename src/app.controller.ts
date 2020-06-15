import { Get, Controller, Render, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { default as config } from '../config';
import * as uuid from 'uuid';
import * as crypto from 'crypto';
import { ResponsePaymentDto } from './response-payment';
import { PaymentFormDto } from './payment-form';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @Render('form')
  root() {
    return null;
  }

  @Post('/payment')
  @Render('index')
  payment(@Body() body: PaymentFormDto) {
    const referenceCode = uuid.v4();
    const signature = `${config.ApiKey}~${config.merchantId}~${referenceCode}~${config.amount}~${config.currency}`;

    const hash = crypto
      .createHash('md5')
      .update(signature)
      .digest('hex');

    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    const date = new Date().toLocaleDateString('en', options).split(',');

    return {
      name: body.name,
      address: body.address,
      phone: body.phone,
      recipe: referenceCode.substring(1, 8).toUpperCase(),
      date: date,
      payment: {
        url: config.url,
        merchantId: config.merchantId,
        accountId: config.accountId,
        description: config.description,
        referenceCode: referenceCode,
        amount: config.amount,
        tax: config.tax,
        taxReturnBase: config.taxReturnBase,
        currency: config.currency,
        signature: hash,
        test: config.test,
        buyerEmail: body.email,
        responseUrl: config.responseUrl,
        confirmationUrl: config.confirmationUrl,
      },
    };
  }

  @Get('/response')
  @Render('response')
  response(@Query() params) {
    const responsePayment: ResponsePaymentDto = params;

    const transactionState = () => {
      switch (responsePayment.transactionState) {
        case '4':
          return 'Transacción aprobada';
        case '6':
          return 'Transacción rechazada';
        case '7':
          return 'Transacción pendiente';
        case '104':
          return 'Error';
        default:
          return responsePayment.message;
      }
    };

    return {
      payment: responsePayment,
      transactionState: transactionState,
    };
  }

  @Get('/confirmation')
  confirmation(@Query() params) {
    console.log(params);
  }
}
