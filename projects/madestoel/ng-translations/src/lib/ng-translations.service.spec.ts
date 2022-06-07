import { TestBed } from '@angular/core/testing';

import { NgTranslationsService } from './ng-translations.service';

describe('NgTranslationsService', () => {
  let service: NgTranslationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTranslationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
