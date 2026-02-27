import { Routes } from '@angular/router';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { QuestionsComponent } from './pages/questions/questions.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: OnboardingComponent,
  },
  {
    path: 'questions',
    pathMatch: 'full',
    component: QuestionsComponent,
  },
];
