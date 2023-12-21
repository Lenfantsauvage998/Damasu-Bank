import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trans-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trans-card.component.html',
  styleUrl: './trans-card.component.css'
})
export class TransCardComponent {
  @Input() place:String ="Paris la've"
  @Input() date:String ="12/05/2012"
  @Input() amount:String ="$78.000"
}
