export class DomainAnalysisTool {
  code: string;
  name: string;
  constructor(domainAnalysisTool: {code?: string, name?: string}) {
    this.code = domainAnalysisTool.code || "";
    this.name = domainAnalysisTool.name || "";
  }
}
