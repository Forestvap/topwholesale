import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { ItemService } from './services/item.service';
import { AppRoutingModule }     from './app-routing.module';
import { BeaniesComponent } from './beanies/items.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [ ItemService ],
    declarations: [
        AppComponent,
        ItemsComponent,
        BeaniesComponent,
        FilterPipe
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }