import { Component } from '@angular/core';
import { Technology } from '../../model/technology';

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [],
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css'
})
export class TechnologiesComponent {

  technologies: Technology[] = [
    { name: 'TypeScript', icon: 'assets/icons/typescript.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'Java', icon: 'assets/icons/java.svg' },
    { name: 'Spring', icon: 'assets/icons/spring.svg' },
    { name: 'Laravel', icon: 'assets/icons/laravel.svg' },
    { name: 'Ionic', icon: 'assets/icons/ionic.svg' },
    { name: 'React', icon: 'assets/icons/react.svg'},
    { name: 'PHP', icon: 'assets/icons/php.svg' },
    { name: 'Android', icon: 'assets/icons/android.svg' },
    { name: 'MySQL', icon: 'assets/icons/mysql.svg' },
    { name: 'PostgreSQL', icon: 'assets/icons/postgresql.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
  ];

}
