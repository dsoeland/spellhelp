import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-ability',
  imports: [],
  templateUrl: './show-ability.html',
  styleUrl: './show-ability.css',
})
export class ShowAbility implements OnInit{

  ability: any;
  private apiUrl = '/api';

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    //const abilityIdParam = this.route.snapshot.paramMap.get("id");
    const abilityIdParam = 1;
    console.log(abilityIdParam);

    if(abilityIdParam) {
      const abilityId = +abilityIdParam;

      this.getAbility(abilityId).subscribe({
        next: data => {
          this.ability = data;
          console.log('ability loaded', data);
        },
        error: err => {
          console.log('ability didnt load correctly', err)
        }
      });
    }
  }

  getAbility(id: number): Observable<any> {
    return this.http.get(`api/abilities/${id}`)
  }

}
