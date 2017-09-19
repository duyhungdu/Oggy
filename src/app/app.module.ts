//chrome.exe --remote-debugging-port=9222
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { APP_CONFIG, AppConfig } from './configs';
import { AuthGuard } from './services';
import { AuthenticationService } from './services';
import { AppComponent } from './app.component';
// Import containers
import {
  FullLayout,
  SimpleLayout
} from './containers';

const APP_CONTAINERS = [
  FullLayout,
  SimpleLayout
]

// Import components
import {
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar
} from './components';

const APP_COMPONENTS = [
  AppAside,
  AppBreadcrumbs,
  AppFooter,
  AppHeader,
  AppSidebar
]

// Import directives
import {
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
} from './directives';

const APP_DIRECTIVES = [
  AsideToggleDirective,
  NAV_DROPDOWN_DIRECTIVES,
  SIDEBAR_TOGGLE_DIRECTIVES
]


// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    ...APP_COMPONENTS,
    ...APP_DIRECTIVES
  ],
  imports: [
    HttpModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule
  ],
  providers: [AuthGuard, AuthenticationService, { provide: APP_CONFIG, useValue: AppConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }