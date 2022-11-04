import { Category } from './../models/models';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  baseUrl = "https://localhost:44305/api/Shopping/"

  constructor(private http: HttpClient) { }

  getCategoryList() {
    let url = this.baseUrl + 'GetCategoryList';
    return this.http.get<any[]>(url).pipe(
      map((categories) =>
        categories.map((category) => {
          let mappedCategory: Category = {
            id: category.id,
            category: category.category,
            subCategory: category.subCategory,
          };
          return mappedCategory;
        })
      )
    );
  }

  getProducts(category: string, subCategory: string, count: number) {
    return this.http.get<any[]>(this.baseUrl + "GetProducts", {
      params: new HttpParams()
        .set('category', category)
        .set('subCategory', subCategory)
        .set('count', count),
    });
  }
}
