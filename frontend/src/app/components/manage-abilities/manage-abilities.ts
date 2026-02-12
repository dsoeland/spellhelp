import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-manage-abilities',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './manage-abilities.html',
  styleUrl: './manage-abilities.css',
})
export class ManageAbilities {

  abilityForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.abilityForm = fb.group({
      name: ['', Validators.required],
      keybind: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.abilityForm.valid) {
      this.http.post('http://lockalhost:8080/api/abilities', this.abilityForm.value).subscribe(() => {
        alert('Abilities successfully added');
        this.abilityForm.reset();
      })
    }
  }

}
