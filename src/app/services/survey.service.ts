import { Injectable } from '@angular/core';
import { Survey } from '../services/survey';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { MailService } from '../services/mail.service';


@Injectable({
  providedIn: 'root'
})
export class SurveyService {
 // survey: Survey;
  survey = {
   // $key: '',
    name: '',
    email: '',
    telefono: 0,
    fecha: '',
    date: 1,
    servicio: 1,
    calidad: 1,
    precio: 1,
    limpieza: 1,
    comentarios: '',
    group1: '',
    group2: '',
    group3: '',
    group4: '',
    group5: ''
  }
  surveysList: AngularFireList<any>;
  surveyObject: AngularFireObject<any>;

  

  constructor(private db: AngularFireDatabase, public amail: MailService) { }

  GetSurveysList() {
    this.surveysList = this.db.list('polls'/*, ref =>
    //  ref.orderByChild('date')*/
    );
    return this.surveysList;
  }
  
  AddSurvey(survey: Survey){
    
    this.surveysList.push(survey);
    this.amail.mail_(survey).subscribe(data => {
      if(data){ }
    });
  
  }
 

  group1(sf){    
    this.survey.group1 = sf;
  }
  group2(sf){
    this.survey.group2 = sf;
  }
  group3(sf){
    this.survey.group3 = sf;
  }
  group4(sf){
    this.survey.group4 = sf;
  }
  group5(sf){
    this.survey.group5 = sf;
  }
  stars(sf){
    this.survey.servicio = sf.servicio;
    this.survey.calidad = sf.calidad;
    this.survey.precio = sf.precio;
    this.survey.limpieza = sf.limpieza;
  }
  info(sf){
    this.survey.name = sf.name;
    this.survey.email = sf.email;
    this.survey.telefono = sf.telefono;
    this.survey.fecha = sf.fecha;
    this.survey.date = Date.now();
     
  }
  comm(sf){
    this.survey.comentarios = sf.comentarios;
    this.AddSurvey(this.survey);
  }
}
