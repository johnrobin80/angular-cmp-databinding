import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  employeedetails: Employee[] = [new Employee('Robin', 'John', '1234567')];

  constructor() {}

  ngOnInit(): void {}
}
