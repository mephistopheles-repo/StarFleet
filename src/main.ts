import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withComponentInputBinding} from "@angular/router";
import routes from './app/pages/route'

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withComponentInputBinding())
    // ...
  ]
}).then();
