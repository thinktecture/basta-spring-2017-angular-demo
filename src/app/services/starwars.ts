import {Observable} from 'rxjs/Rx';
import {StarwarsPeople} from '../models/starwarsPeople';
import {Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';

@Injectable()
export class StarwarsService {
    private readonly _baseUrl = 'https://swapi.co/api';

    constructor(private _http: Http) {
    }

    public list(page: number = 1): Observable<Array<StarwarsPeople>> {
        return this._http.get(`${this._baseUrl}/people?page=${page}`)
            .map((response: Response) => response.json())
            .map(json => json.results);
    }

    public people(id: number): Observable<StarwarsPeople> {
        return this._http.get(`${this._baseUrl}/people/${id}`)
            .map((response: Response) => response.json());
    }
}
