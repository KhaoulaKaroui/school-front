import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  selectedPdfFile: any;
  actualPath: any;
  role: any = String;
  test: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.actualPath = this.router.url;
    // Récupère le rôle depuis les données de la route
    this.role = this.route.snapshot.data['role'];

    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      tel: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      pwd: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(8)]],
      speciality: ['', [Validators.required]],
      telChild: ['', [Validators.required]]
    });
    // Ajoute les champs spécifiques en fonction du rôle
    // if (this.role === 'teacher') {
    //   this.signupForm.addControl('speciality', this.formBuilder.control('', Validators.required));
    //   this.signupForm.addControl('cv', this.formBuilder.control('', Validators.required));
    // } else if (this.role === 'student') {
    //   this.signupForm.addControl('pathPhoto', this.formBuilder.control('', Validators.required));
    // } else if (this.role === 'parent') {
    //   this.signupForm.addControl('telChild', this.formBuilder.control('', Validators.required));
    //   this.signupForm.addControl('cv', this.formBuilder.control('', Validators.required));
    // }
  }



  signup() {
  if (this.actualPath == '/signupParent') {
    this.signupForm.value.role = 'parent';
  } else if (this.actualPath == '/signupAdmin') {
    this.signupForm.value.role = 'admin';
  } else if (this.actualPath == '/signupTeacher') {
    this.signupForm.value.role = 'teacher';
  } else {
    this.signupForm.value.role = 'student';
  }
  // console.log("here signupForm", this.signupForm.value);
  // console.log("this.selectedFile", this.selectedFile);
  // this.userService.signup(this.signupForm.value, this.selectedFile).subscribe(
  console.log("signupForm",  this.signupForm.value);
  
  this.userService.signup(this.signupForm.value).subscribe(
    (response) => {
      console.log("here response Signup from BE", response.isAdded);
      this.router.navigate(['signin']);
    }
  );
}

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

  if(input.files && input.files.length > 0) {
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