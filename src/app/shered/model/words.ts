import { Language } from "./language";
import { TranslatedWord } from "./TranslatedWord";

export class words {
    wordsInCategory:TranslatedWord[]= [];
    
    constructor( public categoryName:string, public ID:number,public sourceWord: Language,public targetWord: Language, public wordsList:TranslatedWord[],public lastUpDate:Date) {
    if(wordsList) {
        this.wordsList= wordsList;
    }
}
currentCategory!:words;
addWord(newWord:TranslatedWord): void {
  this.currentCategory.wordsList.push(newWord);
  console.log(this.currentCategory.wordsList);
  console.log(this.currentCategory);
}
removeWord(i:number): void {
  this.currentCategory.wordsList.splice(i,1);
  console.log(this.currentCategory.wordsList)
}
    
}
