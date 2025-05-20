export class Domain {
  id: number;
  name: string;
  constructor(domain: {id?: number, name?: string}) {
    this.id = domain.id || 0;
    this.name = domain.name || "";
  }
}
