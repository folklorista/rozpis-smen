import { Component, Input, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Employee, Shift, ShiftItem, Workplace } from '../month-view.component';

@Component({
  selector: 'app-month-view-row',
  templateUrl: './month-view-row.component.html',
  styleUrls: ['./month-view-row.component.scss'],
})
export class MonthViewRowComponent implements OnInit {
  @Input() shift: Shift;
  @Input() workplaces: Workplace[];
  @Input() employees: Employee[];
  constructor() {}

  ngOnInit(): void {}

  public getShiftItem(shift: Shift, workplace: Workplace): ShiftItem {
    return shift.items.find((item) => item.idWorkplace === workplace.id);
  }
  public getEmployeeById(idEmployee: number): Employee {
    return this.employees.find((employee) => employee.id === idEmployee);
  }
  public getUnassignedEmployees(shift: Shift): Employee[] {
    const assignedIdEmployees: number[] = [].concat(
      ...shift.items.map((item) => item.idEmployees)
    );
    return this.employees.filter(
      (employee) => !assignedIdEmployees.includes(employee.id)
    );
  }

  assignEmployee(event: CdkDragDrop<number[]>) {
    console.log(event);
    console.log(event.previousContainer.id, event.container.id);
    if (event.previousContainer === event.container) {
      console.log('move');
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      console.log('transfer');
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
