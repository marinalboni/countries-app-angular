import { Component, Input } from '@angular/core';
import { CountryInfo } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html'
})
export class PaisTablaComponent {

  @Input()
  listaPaises: CountryInfo[] = []
}
