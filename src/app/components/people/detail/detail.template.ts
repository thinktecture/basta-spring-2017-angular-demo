import {Component, OnInit} from '@angular/core';
import {StarwarsService} from '../../../services/starwars';
import {StarwarsPeople} from '../../../models/starwarsPeople';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-people-detail',
    templateUrl: 'detail.html'
})
export class PeopleDetailComponent implements OnInit {
    private _id: number;
    public people: StarwarsPeople;

    public ngOnInit(): void {
        this._activatedRoute.params
            .flatMap(params => {
                this._id = +params['id'];
                return this._starwarsService.people(this._id);
            })
            .subscribe(people => this.people = people);
    }

    constructor(private _starwarsService: StarwarsService, private _activatedRoute: ActivatedRoute, private _router: Router) {
    }

    public next(): void {
        const nextId = this._id % 10 + 1;
        this._router.navigate(['../', nextId], { relativeTo: this._activatedRoute });
    }

    public previous(): void {
        const previousId = (this._id - 1) % 10;
        this._router.navigate(['../', previousId <= 0 ? 10 : previousId], { relativeTo: this._activatedRoute });
    }
}
