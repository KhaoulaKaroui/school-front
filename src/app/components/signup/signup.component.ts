import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  imagePreview: any;
  selectedFile: any;
  selectedPdfFile: any ;
  actualPath: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.actualPath = this.router.url;
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      tel: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      speciality: ['', [Validators.required]],
      cv: ['', [Validators.required]],
      pathPhoto: ['', [Validators.required]],
      telChild: ['', [Validators.required]]
    });
  }

  signup() {
    if (this.actualPath == '/inscription') {
      this.signupForm.value.role = 'parent';
    } else if (this.actualPath == '/signupAdmin') {
      this.signupForm.value.role = 'admin';
    } else if (this.actualPath == '/signupTeacher') {
      this.signupForm.value.role = 'teacher';
    } else {
      this.signupForm.value.role = 'student';
    }
    console.log("here signupForm", this.signupForm.value);
    this.userService.signup(this.signupForm.value, this.selectedFile, this.selectedPdfFile).subscribe(
      (response) => {
        console.log("here response Signup from BE", response.isAdded);
        this.router.navigate(['signin'])
      }
    )}

  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.selectedFile = file;

      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }



  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.selectedPdfFile = input.files[0];

      // Ensure the selected file is a PDF
      if (this.selectedPdfFile.type === 'application/pdf') {
        console.log('Selected file:', this.selectedPdfFile);
        // Perform further processing with the selected file if necessary
      } else {
        alert('Selected file is not a PDF');
        this.selectedPdfFile = null;
      }
    }
  }
}
