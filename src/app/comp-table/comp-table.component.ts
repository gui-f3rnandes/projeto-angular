import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-comp-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-table.component.html',
  styleUrl: './comp-table.component.css'
})
export class CompTableComponent {

  @Input() vetor : string[] = [];
}
