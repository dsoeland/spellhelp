import {Component, HostListener, OnInit} from '@angular/core';
import {Observable, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-show-ability',
  imports: [AsyncPipe],
  templateUrl: './show-ability.html',
  styleUrl: './show-ability.css',
})
export class ShowAbility implements OnInit{

  ability$: Observable<any> | undefined;
  keyEvent: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    //const abilityIdParam = this.route.snapshot.paramMap.get("id");
    const abilityIdParam = 1;
    console.log(abilityIdParam);

    if(abilityIdParam) {
      const abilityId = +abilityIdParam;

      this.ability$ = this.getAbility(abilityId);

    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //console.log(event.key);
    this.keyEvent = event.key;
    console.log(this.keyEvent);
  }


  getAbility(id: number): Observable<any> {
    let datacheck = this.http.get(`http://localhost:8080/api/abilities/${id}`)
    datacheck.pipe(
      tap(data => console.log('ability data: ', data))
    ).subscribe();

    return datacheck;
    //return this.http.get(`http://localhost:8080/api/abilities/${id}`)
  }

}
