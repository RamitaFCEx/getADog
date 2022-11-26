import { DogsApiService } from 'src/app/services/dogs-api.service';
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


  constructor(private dogsApi: DogsApiService,
              private router: Router) { }


  ngOnInit(): void {
  }

  

  onSubmit(){
  }
  

}
