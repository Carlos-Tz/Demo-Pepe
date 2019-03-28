import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p3',
  templateUrl: './p3.component.html',
  styleUrls: ['./p3.component.css']
})
export class P3Component implements OnInit {
  public sForm: FormGroup;
  constructor(
    public api: SurveyService,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.suForm();
    this.onChanges();
  }

  suForm() {
    this.sForm = this.fb.group({
      group3: ['']
    });
  }
  onChanges(){
    this.sForm.get('group3').valueChanges
    .subscribe(selected => {
      this.api.group3(selected);
      this.router.navigate(['/4']);
    }); 
  }
  sub(){}
}

