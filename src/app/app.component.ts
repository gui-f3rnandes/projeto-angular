import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IndexComponentComponent } from "./index-component/index-component.component";
import { PipesComponent } from "./pipes/pipes.component";
import { ApiComponent } from "./api/api.component";
import { DbcompComponent } from "./dbcomp/dbcomp.component";
import { CompRouteComponent } from "./comp-route/comp-route.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IndexComponentComponent, PipesComponent, ApiComponent, DbcompComponent, CompRouteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'projetoAngular';
}
