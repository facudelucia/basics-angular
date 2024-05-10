import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter()

  @Input()
  public characterList: Character[] = []

  public deleteCharacter(id: string): void {
    this.onDeleteCharacter.emit(id)
  }

}
