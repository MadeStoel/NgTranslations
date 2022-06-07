import { HostListener, NgModule, Renderer2 } from '@angular/core';
import { NgTranslationsComponent } from './ng-translations.component';
import { TranslateDirective } from './directives/translate.directive';

@NgModule({
  declarations: [
    NgTranslationsComponent,
    TranslateDirective,
  ],
  imports: [
  ],
  exports: [
    NgTranslationsComponent,
    TranslateDirective,
  ]
})
export class NgTranslationsModule {
  public editing?: HTMLElement;
  private committing: Array<String> = [];

  public constructor() {
    document.addEventListener('click', (event: MouseEvent) => {
      if (!!this.editing && event.target !== this.editing) {
        this.editing.contentEditable = 'false';

        this.committing.push(this.editing.innerText);
        console.log('staging for DB persistance: ', this.committing);

        this.editing = undefined;
      }

      if (!event.altKey) return;

      const element = (event.target as HTMLElement);
      const attributes = element.attributes;

      if (!!attributes.getNamedItem('msTranslate')) {
        this.editing = element;
        element.contentEditable = 'true';
        element.focus();
      };
    });
  }
}
