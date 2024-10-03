import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  clients: { id: number, name: string, email: string, phone: string }[] = [];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    
    this.clients = [
      { id: 1, name: 'Mario Rossi', email: 'mario.rossi@example.com', phone: '123456789' },
      { id: 2, name: 'Luigi Verdi', email: 'luigi.verdi@example.com', phone: '987654321' }
    ];
  }

  editClient(id: number): void {
    console.log('Modifica cliente con ID:', id);
  }

  deleteClient(id: number): void {
    console.log('Cancella cliente con ID:', id);
    this.clients = this.clients.filter(client => client.id !== id);
  }
}
