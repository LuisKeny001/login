import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  private fb = inject (FormBuilder);
  private AuthService = inject (AuthService);


  public myForm: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(3)]],

  })


  Login(){

    const {username, password} = this.myForm.value;

    this.AuthService.login(username, password).subscribe ( (data: any) => {
      let valor: boolean = true
      do{
        let palabra = prompt("botame tu 'gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'");
        if(palabra == "gaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"){
          valor = false
          alert("pasa, botaste tu gaaa");
        } else {
          alert("no botaste tu gaaa :b");
        }

      }while(valor)
    })

  }

}
