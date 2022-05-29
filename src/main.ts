import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from './app/app-routing';
import { AppComponent } from './app/app.component';
import { OpenweatherService } from './app/openweather.service';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent,
  {
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
    providers:[

      ImportedNgModuleProviders,
      importProvidersFrom(RouterModule.forRoot(routes),
      BrowserAnimationsModule,HttpClientModule)
    ]
  }



  export function httpTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http);
  }
