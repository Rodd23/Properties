import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  sold = false;

  imagePath = "";
  imgUrl: any;

  formProperty!: FormGroup;

  constructor(private propertyService: PropertyService ){}

  ngOnInit():void {
    this.formProperty = new FormGroup({
      acquisition: new FormControl('', [Validators.required]),
      sale: new FormControl('', [Validators.required]),
      profit: new FormControl('', [Validators.required])
    })
  }

  get acquisition() {
    return this.formProperty.get('acquisition')!
  }

  get sale() {
    return this.formProperty.get('sale')!
  
  }
  get profit() {
    return this.formProperty.get('profit')!
  }

  preview(files: any, event: any) {
    if(files.length === 0) {
      return;
    }
    let mimeType = files[0].type;
    if(mimeType.match(/image\/*/) == null) {
      return;
    }
    let reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgUrl = reader.result;
    }
  }

  check() {
    if(this.sold) {
      this.sold = false
    } else {
      this.sold = true
    }
  }

  registerProperty() {
    if (this.formProperty.invalid) {
      return;
    }

    this.propertyService.register(this.formProperty.value.acquisition, this.formProperty.value.sale, this.sold, this.formProperty.value.profit)
  }
}
