import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Character } from '../../Character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {
  @Output() onAddCharacter: EventEmitter<Character> = new EventEmitter();
  title!: string;
  desc!: string;
  status: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.title || !this.desc){
      alert('All fields required!');
      return;
    }

    const newCharacter = {
      title: this.title,
      desc: this.desc,
      status: this.status
    }

    this.onAddCharacter.emit(newCharacter);

    this.title = '';
    this.desc = '';
    this.status = true;
  }

}
