import { Component } from '@angular/core';
import { CountryInfo } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  errorTermino: string = '';
  listaPaises: CountryInfo[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.listaPaises = [];
    this.termino = termino;

    this.paisService.buscarPorCapital(this.termino)
    .subscribe({
      next: (res) =>{
        this.listaPaises = res;
      },
      error: (err) => {
        this.hayError = true;
        this.errorTermino = this.termino;
      },
      complete: () => {
        if(!this.hayError) {
          this.errorTermino = '';
        }
      }
    })
  }
}
