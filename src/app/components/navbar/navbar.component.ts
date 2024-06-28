import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @Output() themeChange = new EventEmitter<boolean>();
  isDarkMode = false;
  sections = [
    { id: 'inicio', name: 'Inicio', isActive: false, iconClass: 'fa-home' },
    { id: 'sobre-mi', name: 'Sobre Mí', isActive: false, iconClass: 'fa-user' },
    { id: 'tecnologias', name: 'Tecnologías', isActive: false, iconClass: 'fa-laptop-code' },
    { id: 'experiencia', name: 'Experiencia', isActive: false, iconClass: 'fa-briefcase' },
    { id: 'proyectos', name: 'Proyectos', isActive: false, iconClass: 'fa-project-diagram' }
    
  ];

  constructor() {}

  ngOnInit(): void {
    this.setActiveClass();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.setActiveClass();
  }

  setActiveClass(): void {
    const offsetMargin = 290;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        const offset = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offset - offsetMargin && scrollPosition < offset + height) {
          section.isActive = true;
        } else {
          section.isActive = false;
        }
      }
    });
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    this.themeChange.emit(this.isDarkMode);
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  setActiveSection(sectionId: string): void {
    this.sections.forEach(section => {
      section.isActive = section.id === sectionId;
    });

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getIconClass(sectionId: string): string {
    const section = this.sections.find(sec => sec.id === sectionId);
    return section ? section.iconClass : '';
  }
}
