import { Component, OnInit } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
//import { Language } from '../shered/model/language';
import { words } from '../shered/model/words';
import { RouterLink } from '@angular/router';
//import { TranslatedWord } from '../shered/model/TranslatedWord';
import { LoggingService } from '../services/logging.service';
import { CategoryService } from '../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteCategoryDialogComponent } from '../delete-category-dialog/delete-category-dialog.component';
 
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatTableModule,RouterLink],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent implements OnInit {
 categorys:words[]=[]
 constructor(private categoryService:CategoryService, private dialog:MatDialog,private loggingService:LoggingService){  

  }
  
  displayedColumns: string[]=['CategoryName', 'WordsNumber', 'date','actions'];
  
  ngOnInit(){ //on component loading
    this.loggingService.log('home page componnent intialized');
    this.categorys=this.categoryService.list() //service bring list of categorys
  }

  deleteCategory(ID:number,CategoryName:string){
    const dialogRef=this.dialog.open(DeleteCategoryDialogComponent,{data:CategoryName,});
    dialogRef.afterClosed().subscribe(deletionConfirmed =>{ //deletionConfirmed returns true or false.
      if(deletionConfirmed==true){
        this.categoryService.delete(ID)
        this.categorys=this.categoryService.list()
      }
    });
  }
}

