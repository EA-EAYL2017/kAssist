import { Injectable } from '@angular/core';
import { Course } from './course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  courses = [
    {
      id: 1,
      name: 'Training',
      date: '23/04/18',
      location: 'Belfast'
    }
  ];
  constructor(private http: HttpClient) { }

  public getCourses(): void {
    this.http.get<Course[]>('/courses')
    .subscribe(data => {
      this.courses = data;
    });
  }

  public deleteCourse(oldCourse: Course): void {
    this.courses = this.http.delete<Course[]>('/api/course/' + oldCourse.id);
  }

  public updateCourse(courseToUpdate: Course): void {
    this.courses = this.http.put<Course[]>('/api/employee/' + courseToUpdate.id, courseToUpdate);
  }
}
