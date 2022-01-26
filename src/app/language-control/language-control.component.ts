import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Item {
  name: any;
  icon: any;
}

@Component({
  selector: 'app-language-control',
  templateUrl: './language-control.component.html',
  styleUrls: ['./language-control.component.css']
})
export class LanguageControlComponent implements OnInit {
  selectedFood2: any="";
 // selected:any;
 public options:any[] = [
    {Value2 : 'tr', Text : 'Türkiye', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/TR.svg'},
    {Value2 : 'it', Text : 'Italia', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg'},
    {Value2 : 'en', Text : 'English', ImageUrl : 'http://purecatamphetamine.github.io/country-flag-icons/3x2/EN.svg'},

    ];
     selected:any = this.options[2];
  isChecked:boolean = true;

  private static readonly DARK_THEME_CLASS = 'dark-theme';
  private static readonly DARK_THEME_LIGHT = 'light';
  private static readonly DARK_THEME_DARK = 'dark';

  public theme: string;

  constructor(@Inject(DOCUMENT) private document: Document,public translate: TranslateService) {

   // translate.addLangs( [this.options]);
    translate.setDefaultLang('en');

    this.theme = this.document.documentElement.classList.contains(LanguageControlComponent.DARK_THEME_CLASS)
    ? LanguageControlComponent.DARK_THEME_DARK : LanguageControlComponent.DARK_THEME_LIGHT;
  }

  selectTheme()
  {
    if(this.isChecked)
    {
      this.document.documentElement.classList.add(LanguageControlComponent.DARK_THEME_CLASS);
      this.theme = LanguageControlComponent.DARK_THEME_DARK;
      this.isChecked=false;
    }
    else
    {

      this.document.documentElement.classList.remove(LanguageControlComponent.DARK_THEME_CLASS);
      this.theme = LanguageControlComponent.DARK_THEME_LIGHT;
      this.isChecked=true;
    }
  }

  ngOnInit(): void {
  }

  onFoodSelection2() {

    this.translate.use(this.selected.Value2);
  }
}
