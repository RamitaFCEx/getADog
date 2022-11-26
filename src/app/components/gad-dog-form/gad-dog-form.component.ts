import { DogsApiService } from '../../services/dogs-api.service';
import { perro } from '../../model/perro';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'gad-dog-form',
  templateUrl: './gad-dog-form.component.html',
  styleUrls: ['./gad-dog-form.component.scss']
})
export class GadDogFormComponent implements OnInit {
  perro : perro | any;
  @Input()
  form: FormGroup | any;
  constructor(private dogsApi: DogsApiService,
              private router: Router) { }


  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      aptoDepto: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    let formValue = this.form.getRawValue();
    this.dogsApi.save(formValue).subscribe( () => {
      window.location.reload();
    }
    )}
  

}
