import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  topArtists: any[] | undefined;

  constructor(private apiService : ApiService) {}

  ngOnInit(): void {
    this.loadTopArtists();
  }

  loadTopArtists() {
    this.apiService.getTopArtists().subscribe(
      (response) => {
        this.topArtists = response.artists.artist;
      },
      (error) => {
        console.error('Error loading top artists:', error);
      }
    );
  }

}
