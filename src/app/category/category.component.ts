import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { Words } from '../../shered/model/words';
//import { TranslatedWord } from '../../shered/model/TranslatedWord';
import { Language } from '../../shered/model/language';


 
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatTableModule,Words,Language],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
dataSource: any;
displayedColumns: any;

}
