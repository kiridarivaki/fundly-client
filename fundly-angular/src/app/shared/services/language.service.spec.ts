import { TestBed } from '@angular/core/testing';
import { TranslocoService } from '@jsverse/transloco';
import { of } from 'rxjs';

import { LanguageService } from './language.service';

describe('LanguageService', () => {
  let service: LanguageService;
  let translocoSpy: jasmine.SpyObj<TranslocoService>;

  const storageKey = 'fundly.activeLang';

  beforeEach(() => {
    localStorage.removeItem(storageKey);

    translocoSpy = jasmine.createSpyObj<TranslocoService>(
      'TranslocoService',
      ['setActiveLang', 'getDefaultLang', 'getActiveLang', 'getAvailableLangs'],
      { langChanges$: of('en') }
    );

    translocoSpy.getDefaultLang.and.returnValue('en');
    translocoSpy.getActiveLang.and.returnValue('en');
    translocoSpy.getAvailableLangs.and.returnValue(['en', 'gr']);

    TestBed.configureTestingModule({
      providers: [{ provide: TranslocoService, useValue: translocoSpy }]
    });

    service = TestBed.inject(LanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should switch and persist a supported language', () => {
    service.switchLanguage('gr');

    expect(translocoSpy.setActiveLang).toHaveBeenCalledWith('gr');
    expect(localStorage.getItem(storageKey)).toBe('gr');
  });

  it('should normalize browser-style language codes', () => {
    service.switchLanguage('en-US');

    expect(translocoSpy.setActiveLang).toHaveBeenCalledWith('en');
    expect(localStorage.getItem(storageKey)).toBe('en');
  });

  it('should ignore unsupported language values', () => {
    service.switchLanguage('de');

    expect(translocoSpy.setActiveLang).not.toHaveBeenCalled();
    expect(localStorage.getItem(storageKey)).toBeNull();
  });

  it('should initialize language from local storage', () => {
    localStorage.setItem(storageKey, 'gr');

    service.initLanguage();

    expect(translocoSpy.setActiveLang).toHaveBeenCalledWith('gr');
  });

  it('should expose active and available languages', () => {
    expect(service.getActiveLanguage()).toBe('en');
    expect(service.getAvailableLanguages()).toEqual(['en', 'gr']);
  });
});
