import {ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  private Sentry: any;
  handleError(error: any): void {
    if (!this.Sentry) {
      import(/* webpackChunkName: 'sentry' */'@sentry/angular').then((sentry) => {
        sentry.init({
          dsn: 'https://examplePublicKey@o0.ingest.sentry.io/0',
        });
        this.Sentry = sentry.createErrorHandler({showDialog: true});
        this.Sentry.handleError(error);
      });
      return;
    }
    this.Sentry.handleError(error);
  }
}
