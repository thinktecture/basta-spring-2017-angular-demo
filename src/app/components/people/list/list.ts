import {Component, OnInit} from '@angular/core';
import {StarwarsService} from '../../../services/starwars';
import {StarwarsPeople} from '../../../models/starwarsPeople';

@Component({
    selector: 'app-people-list',
    templateUrl: 'list.html'
})
export class PeopleListComponent implements OnInit {
    public list: Array<StarwarsPeople>;

    public ngOnInit(): void {
        this._starwarsService.list()
            .subscribe(list => this.list = list);
    }

    constructor(private _starwarsService: StarwarsService) {
    }
}
