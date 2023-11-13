import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  showPrompt(message: string) {
    alert(message);
  }
}
