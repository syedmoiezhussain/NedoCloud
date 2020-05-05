import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OverallDevices } from '../_models/OverallDevices';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getOverAllDevices(): Observable<OverallDevices> {
    return this.httpClient.get<OverallDevices>(
      this.baseUrl + 'OverallDevicesStatus'
    );
  }
}
