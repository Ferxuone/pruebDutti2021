import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  languageSelected: string;

  constructor(
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.languageSelected = this.translateService.currentLang;
    this.translateService.onLangChange.subscribe(
      (params) => {
        this.languageSelected = params.lang;
      }
    )
  }

  onChangeLanguage(lang: string) {
    this.translateService.setDefaultLang(lang);
    this.translateService.use(lang);
  }

}
