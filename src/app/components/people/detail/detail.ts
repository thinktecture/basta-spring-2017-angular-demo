import {Component, OnInit} from '@angular/core';
import {StarwarsService} from '../../../services/starwars';
import {StarwarsPeople} from '../../../models/starwarsPeople';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-people-detail',
    templateUrl: 'detail.html'
})
export class PeopleDetailComponent implements OnInit {
    public people: StarwarsPeople;

    public ngOnInit(): void {
        this._activatedRoute.params
            .flatMap(params => this._starwarsService.people(+params['id']))
            .subscribe(people => this.people = people);
    }

    constructor(private _starwarsService: StarwarsService, private _activatedRoute: ActivatedRoute) {
    }
}
