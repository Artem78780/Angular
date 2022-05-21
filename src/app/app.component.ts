import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface Post  {
  title: string,
  text: string,
  id?: any
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup = new FormGroup({})

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('',[Validators.required,
      Validators.minLength(6)])
    })
  }
  submit(){
    if(this.form.valid){
    console.log(this.form)
    const formData = {...this.form.value}
    console.log('Form Data:', formData)
    }
  }
}
