import { Injectable } from '@angular/core';
import { BaseApiService } from '@core/base-api/base-api.service';
import { Country } from '@core/interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService extends BaseApiService {


  constructor() { 
    super('');
  }

  getAllCountries() {
    return this.get('all');
  }

  getCountryByName(name: string) {
    return this.get<Country[]>('name/' + name);
  }
}
