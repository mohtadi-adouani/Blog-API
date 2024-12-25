import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgIf, UpperCasePipe} from "@angular/common";
import {Post} from '../../../interfaces/post';

@Component({
  selector: 'app-post-detail',
    imports: [
        FormsModule,
        NgIf,
        UpperCasePipe
    ],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent {
  @Input() post?: Post;
}
