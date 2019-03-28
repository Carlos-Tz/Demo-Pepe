import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-p8',
  templateUrl: './p8.component.html',
  styleUrls: ['./p8.component.css']
})
export class P8Component implements OnInit {
  public sForm: FormGroup;
  constructor(
    public api: SurveyService,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {    
    this.api.GetSurveysList();
    this.suForm();
  }

  suForm() {
    this.sForm = this.fb.group({
      comentarios: ['']
    });
  }
  submitS(){
    this.api.comm(this.sForm.value);
    this.router.navigate(['/9']);
  }
}
