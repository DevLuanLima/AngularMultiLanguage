import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from 'src/app/services/translate-config.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private translate : TranslateConfigService){}


  ngOnInit(): void {
  }

  changeDefaultLanguage(langType: string){
    this.translate.changeLanguage(langType)
  }

}
