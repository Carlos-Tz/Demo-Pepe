import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { SurveyService } from 'src/app/services/survey.service';
import { Router } from '@angular/router';
import { MailService } from '../../services/mail.service';

@Component({
  selector: 'app-p7',
  templateUrl: './p7.component.html',
  styleUrls: ['./p7.component.css']
})
export class P7Component implements OnInit {
  public sForm: FormGroup;
  submitted = false;
  constructor(
    public api: SurveyService,
    public apimail: MailService,
    public fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.suForm();
  }
  suForm() {
    this.sForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      telefono: [''],
      fecha: ['']
    });
  }
  get f() { return this.sForm.controls; }

  submitS(){
    this.submitted = true;
    if (this.sForm.invalid) {
      return;
     }
    
   // this.apimail.mail_(this.sForm.value);
    this.api.info(this.sForm.value);
    this.router.navigate(['/8']);
  }
}
