import { Observable } from "rxjs";

export interface IRepository <T>{
	find$(query: string | undefined): Observable<T[] | T>;

}
