import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponentComponent } from "./index-component/index-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoAngular';
}
