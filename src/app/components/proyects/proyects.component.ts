import { Component } from '@angular/core';
import { Technology } from '../../model/technology';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.css'
})
export class ProyectsComponent {

  technologies = [
    { name: 'Angular', icon: 'assets/icons/angular.svg'},
    { name: 'Ionic', icon: 'assets/icons/ionic.svg '},
    { name: 'Spring', icon: 'assets/icons/spring.svg' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg'}
  ];

}
