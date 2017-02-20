import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './components/app/app';
import {NavigationComponent} from './components/navigation/navigation';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes';
import {HomeComponent} from './components/home/home';
import {PeopleListComponent} from './components/people/list/list';
import {StarwarsService} from './services/starwars';
import {PeopleDetailComponent} from './components/people/detail/detail';

@NgModule({
    declarations: [
        AppComponent,
        NavigationComponent,
        HomeComponent,
        PeopleListComponent,
        PeopleDetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, { useHash: true })
    ],
    providers: [
        StarwarsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
