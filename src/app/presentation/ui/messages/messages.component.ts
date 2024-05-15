import { MessagesService } from './messages.service';
import { Observable } from 'rxjs';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, NgFor, MatIconModule, AsyncPipe],
})
export class MessagesComponent {
  errors$: Observable<string[] | null>;
  warns$: Observable<string[] | null>;
  messages$: Observable<string[] | null>;

  constructor(public messageService: MessagesService) {
    this.errors$ = this.messageService.errors$;
    this.warns$ = this.messageService.warns$;
    this.messages$ = this.messageService.messages$;
  }

  onClose(type: 'error' | 'warn' | 'message') {
    if (type === 'error') this.messageService.clear(type);
  }
}
