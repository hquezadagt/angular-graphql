import { Component, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { VeterinaryService } from '../../services/empservice.service'

@Component({
  templateUrl: './fetchperson.component.html'
})

export class FetchPersonComponent {
  public personList: PersonData[];

  constructor(public http: Http, private _router: Router, private _vetService: VeterinaryService) {
    this.getPersonList();
  }

  getPersonList() {
    this._vetService.getPersonList().subscribe(

      data => this.personList = data.data.personList
    )
  }
}

interface PersonData {
  id: number;
  name: string;
  lastName: string;
  miemployee: boolean;
  pets: PetData[]
}

interface PetData {
  petId: number;
  petName: string;

  type: TypeData[]
}

interface TypeData {
  typeId: number;
  typeName: string;
}
