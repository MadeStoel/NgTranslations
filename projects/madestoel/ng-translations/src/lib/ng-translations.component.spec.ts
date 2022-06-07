import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTranslationsComponent } from './ng-translations.component';

describe('NgTranslationsComponent', () => {
  let component: NgTranslationsComponent;
  let fixture: ComponentFixture<NgTranslationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTranslationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
