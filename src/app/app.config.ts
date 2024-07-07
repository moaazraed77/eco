import { ApplicationConfig, CUSTOM_ELEMENTS_SCHEMA, Provider, importProvidersFrom } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FIREBASE_OPTIONS} from '@angular/fire/compat'; // write this special code for upload img 
import { environment } from './environment/environment';
import { StoreModule, provideStore } from '@ngrx/store';
import { reducer } from './modules/store/reducer';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};

const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes, inMemoryScrollingFeature),
    provideClientHydration(),
    importProvidersFrom(ToastrModule.forRoot({
        positionClass: 'toast-top-left',
    }), HttpClientModule),
    provideFirebaseApp(() => initializeApp({ "projectId": "ecommerce3-76713", "appId": "1:502370335629:web:3e81dda475ca978e40dbc4", "databaseURL": "https://ecommerce3-76713-default-rtdb.firebaseio.com", "storageBucket": "ecommerce3-76713.appspot.com", "apiKey": "AIzaSyD8bDLzaGsDWVb5ANFPGQEo4nZ6SQ7zRNs", "authDomain": "ecommerce3-76713.firebaseapp.com", "messagingSenderId": "502370335629", "measurementId": "G-RE0MTQRT75" })),
    provideDatabase(() => getDatabase()),
    provideStorage(() => getStorage()),
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig },
    // provideStore(),
    provideHashLocationStrategy(),
    // { provide: LocationStrategy, useClass: PathLocationStrategy }
]
};
function provideHashLocationStrategy(): Provider {
  return {provide: LocationStrategy, useClass: HashLocationStrategy};
}