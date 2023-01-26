import { Component } from '@angular/core';
import { CountryInfo } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
    li {
      cursor: pointer;
    }
    li:hover {
      background-color: blue;
    }
  `]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  errorTermino: string = '';
  listaPaises: CountryInfo[] = [];
  sugerenciaPaises: CountryInfo[] = [];

  constructor( private paisService: PaisService ) { }

  buscar( termino: string ) {
    this.hayError = false;
    this.listaPaises = [];
    this.termino = termino;
    this.sugerenciaPaises = [];

    this.paisService.buscarPais(this.termino)
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

  sugerencias( termino: string ) {
    this.hayError = false;

    if( termino === '') {
      this.sugerenciaPaises = [];
    }

    this.paisService.buscarPais( termino )
    .subscribe({
      next: res => this.sugerenciaPaises = res.splice(0, 5),
      error: err => this.sugerenciaPaises = []
    })
  }

}
