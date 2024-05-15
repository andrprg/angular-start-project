import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
} from '@angular/material/progress-spinner';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgIf, MatProgressSpinnerModule, AsyncPipe, MatProgressSpinner],
})
export class SpinnerComponent {
  constructor(public spinnerService: SpinnerService) {}
}
