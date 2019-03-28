import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p1',
  templateUrl: './p1.component.html',
  styleUrls: ['./p1.component.css']
})
export class P1Component implements OnInit {
  public sForm: FormGroup;

  constructor(
    public api: SurveyService,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    //this.api.GetSurveysList();
    this.suForm();
    this.onChanges();
  }
  suForm() {
    this.sForm = this.fb.group({
      group1: ['']
    });
  }
  onChanges(){
    this.sForm.get('group1').valueChanges
    .subscribe(selected => {
      this.api.group1(selected);
      this.router.navigate(['/2']);
    }); 
  }
  sub(){}
}
