import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ExperienceComponent } from './components/experience/experience.component';


export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'sobre-mi', component: AboutComponent },
    { path: 'proyectos', component: ProyectsComponent },
    { path: 'tecnologias', component: TechnologiesComponent },
    { path: 'experiencia', component: ExperienceComponent },
];
