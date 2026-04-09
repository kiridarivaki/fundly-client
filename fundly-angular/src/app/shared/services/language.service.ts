import { inject, Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private static readonly storageKey = 'fundly.activeLang';
  private translocoService = inject(TranslocoService);
  readonly activeLanguage$ = this.translocoService.langChanges$;

  initLanguage(): void {
    const storedLanguage = this.getStoredLanguage();
    const browserLanguage = this.getBrowserLanguage();
    const defaultLanguage = this.translocoService.getDefaultLang();

    this.switchLanguage(storedLanguage ?? browserLanguage ?? defaultLanguage);
  }

  getActiveLanguage(): string {
    return this.translocoService.getActiveLang();
  }

  getAvailableLanguages(): string[] {
    return this.getConfiguredLanguages();
  }

  switchLanguage(lang: string): void {
    const normalizedLanguage = this.normalizeLanguage(lang);

    if (!normalizedLanguage) {
      return;
    }

    this.translocoService.setActiveLang(normalizedLanguage);
    this.persistLanguage(normalizedLanguage);
  }

  private getConfiguredLanguages(): string[] {
    return this.translocoService
      .getAvailableLangs()
      .map((language) =>
        typeof language === 'string' ? language.toLowerCase() : language.id.toLowerCase()
      );
  }

  private normalizeLanguage(language: string | null | undefined): string | null {
    if (!language) {
      return null;
    }

    const normalized = language.toLowerCase().split('-')[0];
    const availableLanguages = this.getConfiguredLanguages();

    return availableLanguages.includes(normalized) ? normalized : null;
  }

  private getBrowserLanguage(): string | null {
    if (typeof navigator === 'undefined') {
      return null;
    }

    return this.normalizeLanguage(navigator.language);
  }

  private getStoredLanguage(): string | null {
    if (typeof localStorage === 'undefined') {
      return null;
    }

    try {
      return this.normalizeLanguage(localStorage.getItem(LanguageService.storageKey));
    } catch {
      return null;
    }
  }

  private persistLanguage(language: string): void {
    if (typeof localStorage === 'undefined') {
      return;
    }

    try {
      localStorage.setItem(LanguageService.storageKey, language);
    } catch {
      // Ignore storage write failures (e.g. private mode restrictions).
    }
  }
}
