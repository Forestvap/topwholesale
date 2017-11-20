import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './services/item.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [ ItemService ],
    declarations: [
        AppComponent,
        ItemsComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }