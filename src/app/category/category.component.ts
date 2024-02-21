import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Category } from '../shered/model/words';
//import { Words } from '../../shered/model/words';

 
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatTableModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
dataSource: Category[]=[];
displayedColumns: any;

}

//displayedColums: string[]=['name', 'type', 'index'];
//dataSource = [new words("frutes",1,Language.English,Language.Hebrew)];
//<!--categy1= new words("frutes",1,Language.English,Language.Hebrew,[]); -->
