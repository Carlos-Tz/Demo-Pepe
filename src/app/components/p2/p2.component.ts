import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-p2',
  templateUrl: './p2.component.html',
  styleUrls: ['./p2.component.css']
})
export class P2Component implements OnInit {
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
      group2: ['']
    });
  }
  onChanges(){
    this.sForm.get('group2').valueChanges
    .subscribe(selected => {
      this.api.group2(selected);
      this.router.navigate(['/3']);
    }); 
  }
  sub(){}
}
