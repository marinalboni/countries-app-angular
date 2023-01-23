import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private paisService: PaisService 
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .subscribe((params) => {
      const { id } = params;
      
      this.paisService.buscarPorCodigo(id)
      .subscribe({
        next: (res) =>{
          console.log(res)
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          console.log('se ha completado')
        }
      })
    })
    
  }

}
