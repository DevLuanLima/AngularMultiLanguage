import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsRoutes } from './settings.routes';
import { SettingsComponent } from './settings.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(SettingsRoutes), TranslateModule
  ]
})
export class SettingsModule { }
