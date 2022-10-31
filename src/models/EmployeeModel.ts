//Employee Model
export class Employee {
  public id: string;
  public imageURL: string;
  public name: string;
  public reviewed!: {
    eng: boolean;
    ger: boolean;
  };

  constructor(id: string, imageUrl: string, name: string, reviewed: { eng: boolean, ger: boolean }) {
    this.id = id;
    this.imageURL = imageUrl;
    this.name = name;
    this.reviewed.eng = reviewed.eng;
    this.reviewed.ger = reviewed.ger;
  }
}