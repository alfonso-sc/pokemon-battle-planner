import { Component, Input } from '@angular/core';
import { MoveDetail } from '../../models/move-detail';

@Component({
  selector: 'app-move',
  templateUrl: './move.component.html',
  styleUrl: './move.component.scss'
})
export class MoveComponent {
  @Input({required: true})
  move!: MoveDetail;
  
  constructor() {
  }
}
