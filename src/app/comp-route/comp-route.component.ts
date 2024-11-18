import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-comp-route',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './comp-route.component.html',
  styleUrl: './comp-route.component.css'
})
export class CompRouteComponent {

}
