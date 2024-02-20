import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {CategoryComponent} from "./category/category.component";
import { words } from './shered/model/words';
import { Language } from './shered/model/language';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent,CategoryComponent,words,Language],
})
export class AppComponent {
  title = 'finalPro';
}
