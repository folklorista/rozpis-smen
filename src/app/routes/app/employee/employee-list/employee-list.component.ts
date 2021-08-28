import { Datamodel } from '@/base/model.service';
import { Employee } from '@/spaces/public/employee/employee';
import { EmployeeService } from '@/spaces/public/employee/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  dataSource: Datamodel<Employee>;
  displayedColumns: string[] = ['id', 'name'];

  constructor(public employeeService: EmployeeService) {
    this.employeeService.getList().subscribe((data) => {
      this.dataSource = data;
    });
  }

  ngOnInit(): void {}
}
