import { Component, OnInit, Renderer2, HostListener } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DataService } from './services/dataService/data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit{
  public trailContainer! : HTMLElement;

  constructor(private data:DataService, private renderer: Renderer2){}

  ngOnInit(): void {
    this.data.getAllStories();
    this.createTrailContainer();
  }

  createTrailContainer(){
    this.trailContainer = this.renderer.createElement('div');
    this.renderer.addClass(this.trailContainer,'trail-container');
    document.body.appendChild(this.trailContainer);
  }

  @HostListener('document:mousemove',['$event'])
  onMouseMove(event: MouseEvent) {
    const trail = this. renderer.createElement('div');
    this.renderer.addClass(trail, 'trail');
    this.renderer.setStyle(trail, 'left',`${event.pageX}px`);
    this.renderer.setStyle(trail, 'top',`${event.pageY}px`);
    this.trailContainer.appendChild(trail);

    setTimeout(()=> {
      this.renderer.removeChild( this.trailContainer, trail);
    },3000)
  }
}


