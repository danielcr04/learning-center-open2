import { Injectable } from '@angular/core';
import  {BaseService} from '../../shared/services/base-api.service';
import {environment} from '../../../environments/environment';
import {DomainAnalyses} from '../model/domain-analyses.entity';


const domainAnalysesResourceEndpointPath = environment.domainAnalysesEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class DomainAnalysesService extends BaseService<DomainAnalyses>{
  constructor() {
    super();
    this.resourceEndpoint = domainAnalysesResourceEndpointPath;
  }
}
