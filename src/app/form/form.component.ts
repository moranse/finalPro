import { Component, Input, OnInit, ViewChild} from '@angular/core';
import { words } from '../shered/model/words';
import { Language } from '../shered/model/language';
//import { CategoryComponent } from '../category/category.component';
import { FormsModule, NgModelGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslatedWord } from '../shered/model/TranslatedWord';
import {MatSelectModule} from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatIconModule,MatButtonModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  constructor(private categoryService:CategoryService, private router:Router){}

categorys:words[]=[]
categoryName='';
sourceLanguage='English';
targetLanguage='Hebrew';
words?:TranslatedWord;

newWord:TranslatedWord=new TranslatedWord("","");

//word1:TranslatedWord=new TranslatedWord('apple','תפוח')
//word2:TranslatedWord=new TranslatedWord('orange','תפוז')
//wordsInCategory=[this.word1,this.word2]

//  category1=new words("frutes",0,Language.English,Language.Hebrew,this.wordsInCategory,new Date(24,10,13))
//  category2=new words("sport",1,Language.English,Language.Hebrew,[],new Date(24,10,13))
//  category3=new words("colores",2,Language.English,Language.Hebrew,[],new Date(24,10,13))
//  category4=new words("Jobs",3,Language.English,Language.Hebrew,[],new Date(24,10,13))
//  categorys = [this.category1,this.category2,this.category3,this.category4]


  addWord(newWord:TranslatedWord): void {
    this.currentCategory.wordsList.push(new TranslatedWord(newWord.sourceWord,newWord.targetWord) );
    console.log(this.currentCategory.wordsList);
  }
  
  removeWord(i:number): void {
    this.currentCategory.wordsList.splice(i,1);
    this.wordsGroup?.control.markAsDirty();
    console.log(this.currentCategory.wordsList)
  }
  registration(){
    console.log("form submited successfully");
    console.log("category name:"+this.currentCategory.categoryName);
  }

  //currentCategory!:words;//מימוש הבנאי עבור טעינת הקומפוננטה

  @ViewChild('wordsGroup')wordsGroup?:NgModelGroup;

  @Input() ID?:string;
  currentCategory: words = new words('',0,Language.English,Language.Hebrew,[],new Date());//for two way binding
 
  ngOnInit(): void {//on component load
    if (this.ID) {//האם קיבלתי פרמטר לטובת עריכה
    let ID:number = parseInt(this.ID);//הפיכה למספר
    const category = this.categoryService.get(ID);//פניה לסרוויס ושליפת האוביקט המתאים מהמערך  
      if (category) {//בדיקה שהערך שנשמר תקין
      this.currentCategory = category;//דריסה של האוביקט הריק
      }
    }
  }

  onSubmitRegistration() {
    console.log("Form submitted!!!");
    if (this.ID){//האם נמצאת בטופס לצורך עריכה
      this.categoryService.update(this.currentCategory)
      console.log(this.currentCategory.categoryName+" update sucsesfully");
    }else{
      this.categoryService.add(this.currentCategory)
    }
   this.router.navigate(['/']);//חזרה לעמוד הבית
   console.log(this.currentCategory);
   }
  
   isEmpty(){
    return true;
   }
}
