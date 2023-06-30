import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';    //to use a dialog
import { AddMobileComponent } from './add-mobile/add-mobile.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private dialog:MatDialog,  private api:ApiService){}

  ngOnInit(): void {
    this.getallproducts();
  }

  allproducts:any;

  getallproducts(){
    this.api.getallproducts().subscribe(
      {
        next: (res: any) => {
          this.allproducts = res;
        },
        error: (err) => alert("Error While Fetching the data")
      }
    )
  }

  deleteproduct(id:number){
    this.api.deleteproduct(id).subscribe({
      next:(res)=>{
        alert("Product Deleted Successfully");
      this.getallproducts();
      },
      error:()=>alert("Error while deleting the product")
    }
    )
  }

  addpdialog() {
    const dialogRef1=this.dialog.open(AddMobileComponent, {
      width:'30%',
    });
    dialogRef1.afterClosed().subscribe(val=>{
      if(val == 'save'){
        this.getallproducts();  
      }
    })
  }

  editproduct(row:any) {
    const dialogRef2=this.dialog.open(AddMobileComponent, {
      width:'30%',
      data:row     //sending related row value to  MAT_DIALOG_DATA
    });
    dialogRef2.afterClosed().subscribe(val=>{
      if(val == 'update'){
        this.getallproducts();
      }
    })
  }
  
}
