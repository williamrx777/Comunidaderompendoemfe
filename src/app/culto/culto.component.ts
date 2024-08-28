import { NgFor, CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// import { ChunkPipe } from './chunk.pipe.ts.old';

@Component({
  selector: 'app-culto',
  standalone: true,
  imports: [NgFor, CommonModule, HttpClientModule],
  templateUrl: './culto.component.html',
  styleUrls: ['./culto.component.css']
})
export class CultoComponent implements OnInit {
  culto: any[] = [];
  expandedVideo: SafeResourceUrl | null = null;
  // expandedVideo: SafeResourceUrl | null = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.http.get('https://cref-two.vercel.app/api/v1/culto-lista/').subscribe((data: any) => {
      // Ordena os dados em ordem decrescente pelo campo 'id'
      this.culto = data.sort((a: any, b: any) => b.id - a.id).map((item: any) => ({
        ...item,
        link: this.sanitizeUrl(item.link)
      }));
    });
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  openModal(url: SafeResourceUrl): void {
    this.expandedVideo = url;
    document.body.classList.add('no-scroll');
  }

  closeModal(): void {
    this.expandedVideo = null;
    document.body.classList.remove('no-scroll');
  }

  // openModal(url: SafeResourceUrl): void {
  //   this.expandedVideo = url;
  //   document.body.classList.add('no-scroll');
  // }

  // closeModal(): void {
  //   this.expandedVideo = null;
  //   document.body.classList.remove('no-scroll');
  // }
}
