import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[msTranslate]'
})
export class TranslateDirective {

  constructor(private elementRef: ElementRef) {
  }
}
