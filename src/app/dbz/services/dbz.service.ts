import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid } from 'uuid'

@Injectable({
    providedIn: 'root'
})
export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Krillin',
        power: 8000
    }, {
        id: uuid(),
        name: 'Goku',
        power: 10000
    }]

    public onNewCharacter(character: Character): void {        
        this.characters = [...this.characters, { id: uuid(), ...character }]
        console.log(this.characters)
    }

    public onDeleteCharacter(id: string): void {
        const filteredCharacters = this.characters.filter(item => item.id !== id)
        this.characters = filteredCharacters
    }
}