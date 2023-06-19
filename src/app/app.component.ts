import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'massimo-dutti';

  constructor(
    translateService: TranslateService
  ) {
    translateService.addLangs(['en', 'es'])
    translateService.setDefaultLang('es');
    translateService.use('es');
  }
}
