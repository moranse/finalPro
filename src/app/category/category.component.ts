import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Language } from '../shered/model/language';
import { words } from '../shered/model/words';
import { RouterLink } from '@angular/router';
import { TranslatedWord } from '../shered/model/TranslatedWord';

 
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatTableModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent {
  
  //categorys:words[]

  category1=new words("frutes",1,Language.English,Language.Hebrew,[],new Date(24,10,13))
  category2=new words("sport",2,Language.English,Language.Hebrew,[],new Date(24,10,13))
  category3=new words("frutes",1,Language.English,Language.Hebrew,[],new Date(24,10,13))
  categorys = [this.category1,this.category2,this.category3]

  displayedColumns: string[]=['CategoryName', 'WordsNumber', 'date','actions'];

}

