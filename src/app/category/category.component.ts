import { Component, OnInit} from '@angular/core';
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
import { MatSortModule, MatSort } from '@angular/material/sort';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,MatMenuModule,MatTableModule,RouterLink,MatSortModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent implements OnInit {
 categorys:words[]=[];
 //dataSource = new MatTableDataSource(this.categorys);

 

 constructor(private categoryService:CategoryService, private dialog:MatDialog,private loggingService:LoggingService){}

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

  sortCulomn():words[]{
    console.log(this.categorys);
    let sortedCategories = this.categorys.sort((category1, category2) => {
    //  for(let category of this.categorys){
     // console.log(category.categoryName)
      //  this.categorys.sort((category1, category2) => {
        const name1 = category1.categoryName.toLowerCase(); // Ensure case-insensitive sorting
        const name2 = category2.categoryName.toLowerCase();
        return name1.localeCompare(name2); // Use localeCompare for proper sorting
     // });
   // }
  })
  console.log(sortedCategories)
  this.categorys=sortedCategories
  console.log(this.categorys)
  return this.categorys
  }

}

