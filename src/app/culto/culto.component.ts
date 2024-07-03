import { NgFor, CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-culto',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.css']
})
export class CultoComponent implements OnInit {
  culto: any[] = [];
  
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get('https://cref-two.vercel.app/api/v1/culto-lista/').subscribe((data: any) => {
      this.culto = data.map((item: any) => ({
        ...item,
        link: this.sanitizeUrl(item.link)
      }));
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
