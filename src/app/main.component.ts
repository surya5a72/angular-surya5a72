import { Component, Input } from '@angular/core';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styles: [`h1 { font-family: Lato; }`]
})
export class MainComponent  {
  @Input() name: string;
}
