import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userdata: any;
  mensaje = false;
  autenticando = false;

  constructor(private formBuilder: FormBuilder, private autService: AutenticacionService,
    private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
    ],
    'password': ['', [
      Validators.required,
      Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
      Validators.minLength(6)
    ]
  ]
    });
  }

  onSubmit() {
    this.userdata = this.saveUserdata();
    this.autService.inicioSesion(this.userdata);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.mensaje = true;
        this.autenticando = false;
      }
    }, 5000);
  }
saveUserdata() {
  const saveUserdata = {
    email: this.loginForm.get('email').value,
    password: this.loginForm.get('password').value
  };
  return saveUserdata;
}

isAuth() {
  return this.autService.isAuthenticated();
}

}
