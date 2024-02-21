import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Language } from '../shered/model/language';
import { words } from '../shered/model/words';

 
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatTableModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
dataSource = [new words("frutes",1,Language.English,Language.Hebrew,[])];
displayedColumns: string[]=['name', 'WordsNumber', 'date'];
}
