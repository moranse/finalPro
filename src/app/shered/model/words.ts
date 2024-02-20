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
  deletWord(word: TranslatedWord): void {
    this.wordsInCategory.splice(1,1); //לסדר את המטודה למחיקה
  }
    
    categy1= new words("frutes",1,Language.English,Language.Hebrew,[]);
    categy2= new words("famelyMembers",2,Language.English,Language.Hebrew,[]);
    categy3= new words("sport",3,Language.English,Language.Hebrew,[]);
   
    categoryArray = [this.categy1,this.categy2,this.categy3]

}
