import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base-api.service';
import {environment} from '../../../environments/environment';
import {Domain} from '../model/domain.entity';


const domainsResourceEndpointPath = environment.domainsEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class DomainService extends BaseService<Domain>{
  constructor() {
    super();
    this.resourceEndpoint=domainsResourceEndpointPath;
  }
}
