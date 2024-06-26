import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

  ngOnInit(): void {
    this.loadParticlesJS();
  }

  loadParticlesJS(): void {
    particlesJS.load('particles-js', 'assets/particlesjs-config.json', null);
  }

}
