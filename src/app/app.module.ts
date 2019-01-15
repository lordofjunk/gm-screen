import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { DiceTrayComponent } from './components/dice-tray/dice-tray.component';
import { MonsterPanelComponent } from './components/monster-panel/monster-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigatorComponent,
    DiceTrayComponent,
    MonsterPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
