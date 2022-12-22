import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent {
  profit = 0;

  imagePath = "";
  imgUrl: any;

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
}
