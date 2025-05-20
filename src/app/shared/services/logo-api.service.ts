import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  private baseUrl = environment.logoProviderApiBaseUrl;

  constructor() {
  }

  getUrlToLogo(source: any) {
    console.log('getUrlToLogo', source);
    const url = new URL(source.url);
    return `${this.baseUrl}${url.hostname}`;
  }

  getUrlDomain(domain: string) {
    return `${this.baseUrl}${domain}`;
  }
}
