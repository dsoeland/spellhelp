import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, filter, interval, map, Observable, Subscription, tap} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-show-ability',
  imports: [AsyncPipe],
  templateUrl: './show-ability.html',
  styleUrl: './show-ability.css',
})
export class ShowAbility implements OnInit, OnDestroy {

  //ability$: Observable<any> | undefined;
  currentAbility$ = new BehaviorSubject<any>(null);
  //keyEvent: any;
  isCorrect$ = new BehaviorSubject<boolean>(false);
  correctCount: number = 0;

  private abilities: any[] = [];
  private currentIndex = 0;
  private timerSubscription: Subscription | undefined;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit() {
    //const abilityIdParam = this.route.snapshot.paramMap.get("id");
    // const abilityIdParam = 1;
    // console.log(abilityIdParam);
    //
    // if(abilityIdParam) {
    //   const abilityId = +abilityIdParam;
    //
    //   this.ability$ = this.getAbility(abilityId);
  //}
    this.http.get<any[]>('http://localhost:8080/api/abilities').subscribe(data => {
      this.abilities = data;
      if (this.abilities.length > 0) {
        this.startCycling();
      }
    });
  }

  startCycling() {
    if(this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    this.timerSubscription = interval(3000).subscribe(() => {
      this.nextAbility();
    });

    //this.nextAbility();
  }

  nextAbility() {
    this.isCorrect$.next(false);

    if(this.abilities.length > 0){
      const ability = this.abilities[this.currentIndex];
      this.currentAbility$.next(ability);

      this.currentIndex = (this.currentIndex + 1) % this.abilities.length;
      console.log('current ability: ', ability.name);

      this.startCycling()
    }

  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    //console.log(event.key);
    //this.keyEvent = event.key;
    const activeAbility = this.currentAbility$.value;
    //console.log(this.keyEvent);
    // if(this.ability$) {
    //   this.ability$.pipe(
    //     map(ability => event.key === ability.keybind),
    //     filter(isMatch => isMatch)
    //   ).subscribe(() => {
        if(activeAbility && event.key === activeAbility.keybind) {
          console.log('Correct key pressed for: ', event.key);
          //Trigger success logic within this subscribe (like a highlight in green/red or trigger next ability)
          //this.isCorrect$.next(true);
          //if(this.isCorrect$) {
            this.correctCount++
            this.isCorrect$.next(true);

            setTimeout(() => this.nextAbility(), 200)
          //}

        }else{
          console.log('The correct key should have been: ', activeAbility.keybind);
        }

      //});
    //}
  }

  ngOnDestroy() {
    if(this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
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
