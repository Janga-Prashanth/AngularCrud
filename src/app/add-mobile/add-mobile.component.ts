import { Component, OnInit, Inject } from '@angular/core';         //inject to know what value does MAT_DIALOG_DATA holding
import { FormBuilder, FormGroup, Validators } from '@angular/forms';     //to use reactive form module
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';   //for performing closed,opened etc actions of dialog box 
//mat_dialog_data is to catch the edited data
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-mobile',
  templateUrl: './add-mobile.component.html',
  styleUrls: ['./add-mobile.component.css']
})
export class AddMobileComponent implements OnInit {

  constructor(private dialogref: MatDialogRef<AddMobileComponent>,      //for performing actions of matdialog like closed,opened
    private fb: FormBuilder,                            ////checking and storing the value when a dialog opened
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editdata: any,) { }       //checking and storing the value when a dialog opened

  ngOnInit(): void {
    this.initUserForm();
    this.getmobilelook();    // to get the api value of mobilelooks 
    this.getmobilename();    // to get the api value of mobilename
    if (this.editdata) {
      console.log(this.editdata);            //to check which data we are etting in console
      this.getproduct(this.editdata.id);
    }
  }

  onNoClick() {
    this.dialogref.close();
  }

  mobileform !: FormGroup;

  initUserForm(): void {
    this.mobileform = this.fb.group({
      user: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      date: [null, [Validators.required]],
      look: [null, [Validators.required]],
      price: [null, [Validators.required]],
      comments: [null, [Validators.required]]
    });
  }

  addproduct() {
    if (this.mobileform.valid) {
      this.api.postproduct(this.mobileform.value).subscribe(
        {
          next: (res) => {
            alert("Product Added Successfully");
            this.mobileform.reset();
            this.dialogref.close('save');
          },
          error: () =>
            alert("Error While Adding the product")
        }
      )
    }
  }

  product: any;
  getproduct(id: number) {
    this.api.getproduct(id).subscribe((data : any) =>{
    this.product = data;
    this.setdata();
    } )
  }

  setdata() {
    this.mobileform.get('id')?.setValue(this.editdata.id);
    this.mobileform.get('user')?.setValue(this.editdata.user);
    // this.mobileform.controls['user'].setValue(this.editdata.user)
    this.mobileform.get('brand')?.setValue(this.editdata.brand);
    this.mobileform.get('date')?.setValue(this.editdata.date);
    this.mobileform.get('price')?.setValue(this.editdata.price);
    this.mobileform.get('look')?.setValue(this.editdata.look);
    this.mobileform.get('comments')?.setValue(this.editdata.comments);
  }

  // name1=this.mobileform.get('user');
  // this.mobileform.get('id')?.setValue(this.editdata.id);

  upadateproduct() {
    this.api.updateproduct(this.editdata.id, this.mobileform.value).subscribe(
      {
        next: (res) => {
          alert("Product Updated Successfully");
          this.mobileform.reset();
          this.dialogref.close('update');
        },
        error: () => { alert("Error While Adding the product") }
      }
    )
  }

  submit() {
    if (this.editdata) {      
      this.upadateproduct();
    } else {
      this.addproduct()
    }
  }

  looking: any;

  getmobilelook() {
    this.api.getmobilelook().subscribe((res) => {
      this.looking = res;
    });
  }

  Allmobiles: any;
  getmobilename() {
    this.api.getmobilename().subscribe((res) => {
      this.Allmobiles = res;
    });
  }
}

