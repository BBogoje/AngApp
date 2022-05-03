import { Component, OnInit } from '@angular/core';
import { Character } from '../../Character';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((characters) => 
    (this.characters = characters));
  }

  deleteCharacter(character: Character){
    this.characterService.deleteCharacter(character).subscribe(() => 
    (this.characters = this.characters.filter(c => c.id !== character.id)));
  }

  toggleStatus(character: Character){
    character.status = !character.status;
    this.characterService.updateCharacterStatus(character).subscribe();
  }

  addCharacter(character: Character){
    this.characterService.addCharacter(character).subscribe((character) => 
    (this.characters.push(character)));
  }

}
