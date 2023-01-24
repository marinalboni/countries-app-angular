import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryInfo } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: CountryInfo;
  hayError: boolean = false;
  loading: boolean = true;
  countryCode: string = '';

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService 
  ) {}

  ngOnInit(): void {
    this.hayError = false;
    this.loading = true;

    this.activatedRoute.params
    .subscribe((params) => {
      const { id } = params;
      this.countryCode = id;

      this.paisService.buscarPorCodigo(id)
      .subscribe({
        next: (res) =>{
          this.pais = res[0];
        },
        error: (err) => {
          this.hayError = true;
        }
      })
      .add(() => this.loading = false)
    })
    
  }

}
