import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { EditProfileRequest, RegisterRequest } from '@client/models/user-client.model';
import { API_ENDPOINTS } from '@shared/constants/api-endpoints.constants';
import { UrlService } from '@shared/services/url.service';

@Injectable({
  providedIn: 'root'
})
export class UserClientService {
  private http = inject(HttpClient);
  private urlService = inject(UrlService);
  private readonly userEndpoints = API_ENDPOINTS.USER;

  register(userData: RegisterRequest) {
    let url = this.urlService.urlFor(this.userEndpoints.BASE, this.userEndpoints.REGISTER);
    return this.http.post(url, userData);
  }

  profile(id: string) {
    let url = this.urlService.urlFor(this.userEndpoints.BASE, this.userEndpoints.PROFILE, { id });
    return this.http.get(url);
  }

  editProfile(id: string, editprofileData: EditProfileRequest) {
    let url = this.urlService.urlFor(this.userEndpoints.BASE, this.userEndpoints.EDIT, { id });
    return this.http.patch(url, editprofileData);
  }
}
