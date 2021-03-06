import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import 'anychart/dist/js/anychart-base.min.js';
import 'anychart/dist/js/anychart-ui.min.js';
import 'anychart/dist/js/anychart-gantt.min.js';
import 'anychart/dist/js/anychart-circular-gauge.min';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
