import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CountryInfo } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin: 0 8px 32px 0;
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  listaPaises: CountryInfo[] = [];

  constructor( 
    private paisService: PaisService,
  ) { }

  getClaseCSS( region: string ):string {
    return region === this.regionActiva ? 'btn btn-warning' : 'btn btn-outline-primary'
  }

  activarRegion( region: string ): void {
    if(region === this.regionActiva) return;
    
    this.regionActiva = region;

    this.paisService.buscarPorRegion( this.regionActiva )
    .subscribe((res) => {
      this.listaPaises = res;
    })
  }

}
