import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CdtService } from './Services/cdt.services';
import { BsModalService } from 'ngx-bootstrap/modal';
import { provideStore, provideState } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { bitcoinReducer } from './Store/Bitcoin/bitcoin.reducers';
import { etheriumReducer } from './Store/Etherium/etherium.reducers';
import { StoreModule } from "@ngrx/store";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()), 
    CdtService, 
    BsModalService, 
    provideStore(), 
    provideState({ name: 'bitcoin' , reducer: bitcoinReducer }),
    provideState({ name: 'etherium' , reducer: etheriumReducer })
  ]
};
