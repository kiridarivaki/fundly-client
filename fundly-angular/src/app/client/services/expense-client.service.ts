import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_ENDPOINTS } from '@shared/constants/api-endpoints.constants';
import { UrlService } from '@shared/services/url.service';

@Injectable({
  providedIn: 'root'
})
export class ExpenseClientService {
  private httpClient = inject(HttpClient);
  private urlService = inject(UrlService);
  private readonly userEndpoints = API_ENDPOINTS.EXPENSE;
}
