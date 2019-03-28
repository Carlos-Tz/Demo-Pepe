import { Component, OnInit } from '@angular/core';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-p6',
  templateUrl: './p6.component.html',
  styleUrls: ['./p6.component.css']
})
export class P6Component implements OnInit {
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
      group5: ['']
    });
  }
  onChanges(){
    this.sForm.get('group5').valueChanges
    .subscribe(selected => {
      this.api.group5(selected);
      if(selected == 'NO'){
        this.router.navigate(['/8']);
      }else{
      this.router.navigate(['/7']);
      }
    }); 
  }
  sub(){}
}
