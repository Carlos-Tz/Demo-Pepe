import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-p5',
  templateUrl: './p5.component.html',
  styleUrls: ['./p5.component.css']
})
export class P5Component implements OnInit {
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
      group4: ['']
    });
  }
  onChanges(){
    this.sForm.get('group4').valueChanges
    .subscribe(selected => {
      this.api.group4(selected);
      this.router.navigate(['/6']);
    }); 
  }
  sub(){}
}
