import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.log(err));

// import 'bootstrap';
// import * as Rx from 'rxjs';
// import { Observable } from 'rxjs';
//
// /* Globalize RxJS */
// window['Rx'] = Rx;
// Object.entries(Rx).map(([prop, value]) => window[prop] = value);
//
// class AppModule {
//
//   constructor() {
//     this.test();
//   }
//
//   init() {
//     const click$: Observable<{}> = Rx.Observable.fromEvent(document.getElementsByClassName('capImage'), 'click');
//     click$.subscribe(event => console.log('event', event));
//   }
//
//   test() {
//     console.log('test function');
//   }
// }
//
// new AppModule().init();

