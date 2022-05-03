import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Character';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faExchange } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
  @Input() character!: Character;
  @Output() onDeleteCharacter: EventEmitter<Character> = new EventEmitter();
  @Output() onToggleStatus: EventEmitter<Character> = new EventEmitter();
  faTimes = faTimes;
  faExchange = faExchange;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(character: Character){
    this.onDeleteCharacter.emit(character);
  }

  onToggle(character: Character){
    this.onToggleStatus.emit(character);
  }

}
