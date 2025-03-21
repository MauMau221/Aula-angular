import { Component } from '@angular/core';

@Component({
  selector: 'app-iniciais',
  templateUrl: './iniciais.component.html',
  styleUrls: ['./iniciais.component.scss']
})
export class IniciaisComponent {
  alfabeto: string[] =
    'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
}
