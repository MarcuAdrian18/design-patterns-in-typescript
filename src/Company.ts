import faker, { fake } from "faker";

export class Company {
  suffix: string[];
  CompanyName: string;
  catchPhrase: string;

  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.suffix = faker.company.suffixes();
    this.CompanyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `${this.CompanyName} ${this.suffix[0]} - ${this.catchPhrase}`;
  }
}
