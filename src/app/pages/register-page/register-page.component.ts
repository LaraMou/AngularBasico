import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user.model';
import { AuthService } from 'src/app/services/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({})
  user = new User("" ,"");
  errores: string[] = [];
  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {

    this.registerForm = this.formBuilder.group({
 
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required])]

    });
  }


  // Submit
  submitRegisterForm() {

    console.table(this.registerForm.value);
    console.log("hola");
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.value.email, this.registerForm.value.password)
   
        .subscribe(
          user => {
            this.router.navigate(['/login']);
            // swal.fire( `El usuario  ha sido creado con éxito`,'success');
          },
          err => {
            this.errores = err.error.errors as string[];
            console.error('Código del error desde el backend: ' + err.status);
            console.error(err.error.errors);
          }
        );
        }
      }


}
