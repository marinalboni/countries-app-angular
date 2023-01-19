import { Component, ComponentFactoryResolver } from '@angular/core';
import { CountryInfo } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  listaPaises: CountryInfo[] = [];


  constructor( private paisService: PaisService ) { }

  buscar() {
    this.hayError = false;

    this.paisService.buscarPais(this.termino)
    .subscribe({
      next: (res) =>{
        this.listaPaises = res;
      },
      error: (err) => {
        this.hayError = true;
      },
      complete: () => {
        if(!this.hayError) {
          this.termino = '';
        }
      }
    })
  }

}
