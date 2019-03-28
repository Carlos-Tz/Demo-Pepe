import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p4',
  templateUrl: './p4.component.html',
  styleUrls: ['./p4.component.css']
})
export class P4Component implements OnInit {
  public sForm: FormGroup;
  sf = {
    servicio: 1,
    calidad: 1,
    precio: 1,
    limpieza: 1
  }
  constructor(
    public api: SurveyService,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.suForm();
  }
  suForm() {
    this.sForm = this.fb.group({
      servicio: [''],
      calidad: [''],
      precio: [''],
      limpieza: ['']
    });
  }

  submitS() {
    //this.sForm.value = this.sf;
    this.api.stars(this.sf);
    this.router.navigate(['/5']);
  }
}
