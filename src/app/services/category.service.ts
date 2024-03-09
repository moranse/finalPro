import { Injectable } from '@angular/core';
import { words } from '../shered/model/words';
import { Language } from '../shered/model/language';
//import { TranslatedWord } from '../shered/model/TranslatedWord';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
 
  constructor(){//תצוגה זמנית בטבלה
   // this.category.set(0,new words("frutes",0,Language.English,Language.Hebrew,[],new Date(11/2/2023)))
   // this.category.set(1,new words("sport",1,Language.English,Language.Hebrew,[],new Date()))
  }
category=new Map<number,words>();
ID=0;

  list():words[]{
  return Array.from(this.category.values())
  }

  get(ID:number):words|undefined{
    return this.category.get(ID);
  }

  delete(ID:number):void{
    this.category.delete(ID);
  }

  update(categorys:words):void{
    if(this.category.has(categorys.ID)){
      categorys.lastUpDate=new Date();//עדכון תאריך העדכון של הקטגוריה
      this.category.set(categorys.ID,categorys)
      console.log("update works")
    }
  }
  add(newCategoryData:words){
    newCategoryData.ID=this.ID;
    this.category.set(this.ID,newCategoryData);
    this.ID++;
    console.log('new category added')
  }
}
