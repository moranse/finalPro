import { Language } from "./language";
import { TranslatedWord } from "./TranslatedWord";

export class words {
    wordsInCategory:TranslatedWord[]= [];
    
    constructor( public categoryName:string, public ID:number,public sourceWord: Language,public targetWord: Language, public wordsList:TranslatedWord[],public lastUpDate?:Date) {
    if(wordsList) {
        this.wordsList= wordsList;
    }
}
addWord(word: TranslatedWord): void {
    this.wordsInCategory.push(word);
  }
  //deletWord(word: TranslatedWord): void {
  //  this.wordsInCategory.splice(1,1); //לסדר את המטודה למחיקה
  //}
    
}
