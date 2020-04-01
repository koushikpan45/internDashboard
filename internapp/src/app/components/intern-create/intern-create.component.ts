import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-intern-create',
  templateUrl: './intern-create.component.html',
  styleUrls: ['./intern-create.component.css']
})

export class InternCreateComponent implements OnInit {  
  submitted = false;
  InternForm: FormGroup;
  InternProfile:any = [ 'Bangalore', 'Chennai', 'Delhi', 'Hyderabad', 'Kolkata', 'Mumbai']
  
  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.mainForm();
  }

  ngOnInit() { }

  mainForm() {
    this.InternForm = this.fb.group({
      name: ['', [Validators.required]],
	  phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      address: ['', [Validators.required]],
	  depositAmount: ['', [Validators.required]],
      city: ['', [Validators.required]],
	  date: ['', [Validators.required]]
    })
  }

  // Choose designation with select dropdown
  updateProfile(e){
    this.InternForm.get('city').setValue(e, {
      onlySelf: true
    })
  }

  // Getter to access form control
  get myForm(){
    return this.InternForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.InternForm.valid) {
		console.log('Form is invalid')
      return false;
    } else {
      this.apiService.createIntern(this.InternForm.value).subscribe(
        (res) => {
          console.log('Intern successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/employees-list'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
