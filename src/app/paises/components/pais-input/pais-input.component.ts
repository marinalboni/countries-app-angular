import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = '';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = ''

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe((value) => {
      this.onDebounce.emit( value )
    })
  }

  buscar() {
    this.onEnter.emit(this.termino)
  }

  teclaPresionada() {
    this.debouncer.next( this.termino )
  }

}
