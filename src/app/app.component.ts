import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PruebaDnD';

  selectedFile = new File( [], '');

  imagesStack : Array <File> = [];

  constructor( private http: HttpClient ) {

  }

  onFileSelected(event: any) {
    console.log(event.target);

    this.selectedFile = event.target.files[0];
    
  }

  onUpload() {

    console.log( this.selectedFile );
    
    this.imagesStack.push( this.selectedFile );

    /*
    const fd = new FormData();
    fd.append('image', <File> this.selectedFile, this.selectedFile.name)
    this.http.post( 'localhost:4200', fd )
      .subscribe(
        (resp) => {
          console.log(resp);
          
        }
      );*/
  }

}
