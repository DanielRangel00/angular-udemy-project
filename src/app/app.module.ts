import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { ErrorsComponent } from './errors/errors.component';
import { SuccessMessageComponent } from './success.message/success.message.component';
import {FormsModule} from "@angular/forms";
import { GameComponent } from './game/game.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';


@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, ErrorsComponent, SuccessMessageComponent, GameComponent, OddComponent, EvenComponent],
    imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
