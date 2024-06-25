import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent,{ providers:[appConfig.providers,{provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig}] })
bootstrapApplication(AppComponent,appConfig)
.catch((err) => console.error(err));
