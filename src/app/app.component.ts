import { Component } from '@angular/core';

// il file .ts è il primo da cui parte perchè decide qual'è il file html e qual'è il file css
@Component({
  // selector è il tag che va nell'html per poter usare questo component. vedere index.html
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
}
