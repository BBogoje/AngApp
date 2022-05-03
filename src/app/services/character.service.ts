import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../Character';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:5000/characters'

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl)
  }

  deleteCharacter(character: Character): Observable<Character>{
    const url = `${this.apiUrl}/${character.id}`;
    return this.http.delete<Character>(url);
  }

  updateCharacterStatus(character: Character): Observable<Character>{
    const url = `${this.apiUrl}/${character.id}`;
    return this.http.put<Character>(url, character, httpOptions);
  }

  addCharacter(character: Character): Observable<Character>{
    return this.http.post<Character>(this.apiUrl, character, httpOptions);
  }
}
