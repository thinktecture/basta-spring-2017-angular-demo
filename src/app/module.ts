import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app/app';
import {NavigationComponent} from './components/navigation/navigation';
import {HomeComponent} from './components/home/home';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule

        // TODO: Implement hash-based routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
