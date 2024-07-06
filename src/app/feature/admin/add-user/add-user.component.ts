import { Component } from '@angular/core';
import { User } from '../../../shared-ui';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {


 readonly user: User = {
    id: 1,
    name: 'John Doe',
    email: 'John@example.com',
    phone: 1234567890
  };
}
