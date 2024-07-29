import { CommonModule, NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor,CommonModule,HttpClientModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  mensagem: any[] = []
  isImageExpanded: boolean = false;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://cref-two.vercel.app/api/v1/mensagemdodia-lista/').subscribe((data: any) => {
      this.mensagem = data;
    });
  }

  expandImage() {
    this.isImageExpanded = true;
  }

  closeModal() {
    this.isImageExpanded = false;
  }
}
