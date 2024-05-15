import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private subjectErrors: BehaviorSubject<string[] | null> = new BehaviorSubject<
    string[] | null
  >(null);
  errors$: Observable<string[] | null> = this.subjectErrors.asObservable();

  private subjectWarns: BehaviorSubject<string[] | null> = new BehaviorSubject<
    string[] | null
  >(null);
  warns$: Observable<string[] | null> = this.subjectWarns.asObservable();

  private subjectMessages: BehaviorSubject<string[] | null> =
    new BehaviorSubject<string[] | null>(null);
  messages$: Observable<string[] | null> = this.subjectMessages.asObservable();

  /**
   * show errors
   * @param errors
   */
  showErrors(...errors: string[]): void {
    this.subjectErrors.next(errors);
  }

  /**
   * show warns
   * @param warns
   */
  showsWarns(...warns: string[]): void {
    this.subjectWarns.next(warns);
  }

  /**
   * show messages
   * @param messages
   */
  showMessages(...messages: string[]): void {
    this.subjectMessages.next(messages);
  }

  /**
   * Clear messages
   * @param type
   */
  clear(type: 'error' | 'warn' | 'message'): void {
    if (type === 'error') this.subjectErrors.next(null);
    if (type === 'warn') this.subjectWarns.next(null);
    if (type === 'message') this.subjectMessages.next(null);
  }
}
