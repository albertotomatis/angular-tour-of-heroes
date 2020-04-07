import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// Se ho più moduli, Bootstrap indica il modulo d'avvio, l'AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
