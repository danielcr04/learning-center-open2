import { Injectable } from '@angular/core';
import  {BaseService} from '../../shared/services/base-api.service';
import {environment} from '../../../environments/environment';
import {DomainAnalysisTool} from '../model/domain-analysis-tool.entity';


const domainAnalysisToolsResourceEndpointPath = environment.domainAnalysesEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class DomainAnalysisToolService extends BaseService<DomainAnalysisTool>{
  constructor() {
    super();
    this.resourceEndpoint=domainAnalysisToolsResourceEndpointPath;
  }
}
