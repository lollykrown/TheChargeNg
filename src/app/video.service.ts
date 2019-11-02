import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IVideo } from './video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videosUrl = 'assets/videos.json';

  constructor(private http: HttpClient) { }

  getVideos(): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this.videosUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getVideo(id: number): Observable<IVideo> {
    // if (id === 0) {
    //   return of(this.initializedVideo());
    // }
    const url = `${this.videosUrl}/${id}`;
    return this.http.get<IVideo>(url)
      .pipe(
        tap(data => console.log('getVideo: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  addVideo(newVideo: IVideo): Observable<IVideo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    newVideo.id = null;
    return this.http.post<IVideo>(this.videosUrl, newVideo, { headers })
      .pipe(
        tap(data => console.log('addVideo: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteVideo(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.videosUrl}/${id}`;
    return this.http.delete<IVideo>(url, { headers })
      .pipe(
        tap(data => console.log('deleteVideo: ' + id)),
        catchError(this.handleError)
      );
  }

  updateVideo(updatedVideo: IVideo): Observable<IVideo> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.videosUrl}/${updatedVideo.id}`;
    return this.http.put<IVideo>(url, updatedVideo, { headers })
      .pipe(
        tap(() => console.log('updateVideo: ' + updatedVideo.id)),
        // Return the video on an update
        map(() => updatedVideo),
        catchError(this.handleError)
      );
  }

  searchVideos(searchWord: string): Observable<IVideo[]> {
    return this.http.get<IVideo[]>(this.videosUrl + '/search?search=' + searchWord)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private initializedVideo(): IVideo {
    // Return an initialized object
    return {
      id: 0,
      name: null,
      dateAdded: null,
      description: null,
      // rating: number;
      url: null
    };
  }
}
