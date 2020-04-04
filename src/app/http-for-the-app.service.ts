import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpForTheAppService {

  // adding dependancy injection to get API
  constructor(private http: HttpClient) { }

// all sharable function goes here

getBeer() {
  // return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  return this.http.get('https://api.openbrewerydb.org/breweries')
}

myMethod() {
  return console.log('Let see how it works');
}

}
