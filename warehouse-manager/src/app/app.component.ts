import {
  AfterViewInit,
  Component,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  title = 'Controle do Almoxarifado da UFRN';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "gainsboro";

  }
  
}
