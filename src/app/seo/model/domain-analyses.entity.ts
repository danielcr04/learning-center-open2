export class DomainAnalyses {
  id: number;
  domainId: number;
  toolCode: string;
  domainAuthority: number;
  analyzedAt: string;
  constructor(domainAnalyses: {id?: number, domainId?:number, toolCode?:string, domainAuthority?: number, analyzedAt?:string}) {
    this.id = domainAnalyses.id || 0;
    this.domainId = domainAnalyses.domainId || 0;
    this.toolCode = domainAnalyses.toolCode || '';
    this.domainAuthority = domainAnalyses.domainAuthority || 0;
    this.analyzedAt = domainAnalyses.analyzedAt || '';

  }
}

