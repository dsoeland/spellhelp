import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
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
  private apiUrl = '/api';

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

  getAbility(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/api/abilities/${id}`)
  }

}
