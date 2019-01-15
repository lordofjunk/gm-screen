import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DiceTrayComponent } from './components/dice-tray/dice-tray.component';
import { MonsterPanelComponent } from './components/monster-panel/monster-panel.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dice', component: DiceTrayComponent },
  { path: 'monsters', component: MonsterPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
