import { Component, inject, input, OnInit, signal } from '@angular/core';
import { QuestionBoxComponent } from '../../components/question-box/question-box.component';
import { HttpClient } from '@angular/common/http';
import { ApiResponse, QuestionResponse } from '../../models/types';
import { catchError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [],
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.css',
})
export class OnboardingComponent {
  router = inject(Router);
}
