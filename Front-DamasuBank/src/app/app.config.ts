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
import { balanceReducer } from './Store/Balance/balance.reducers';
import { recordReducer } from './Store/Records/records.reducers';
import { StoreModule } from "@ngrx/store";
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
// import { SocketService } from './Services/Web-Socket/websocket.service';
// import { WrappedSocket } from 'ngx-socket-io/src/socket-io.service';
// import { WebsocketService } from './Services/Web-Socket/websocket.service';

const config: SocketIoConfig = { url: 'http://localhost:8080/ws', options: {} };

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()), 
    CdtService, 
    BsModalService,
    // SocketService,
    provideStore(), 
    provideState({ name: 'bitcoin' , reducer: bitcoinReducer }),
    provideState({ name: 'etherium' , reducer: etheriumReducer }),
    provideState({ name: 'balance' , reducer: balanceReducer }),
    provideState({ name: 'records' , reducer: recordReducer }),
  ]
};
