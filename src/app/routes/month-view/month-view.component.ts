import { Component, OnInit } from '@angular/core';

export interface Employee {
  id: number;
  initials?: string;
  name: string;
}

export interface Workplace {
  id: number;
  name: string;
  capacity?: number;
}

export interface ShiftItem {
  id: number;
  idWorkplace: number;
  idShift: number;
  idEmployees: number[];
}

export interface Shift {
  id: number;
  date: Date;
  isWeekend?: boolean;
  isHoliday?: boolean;
  items: ShiftItem[];
}

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.scss'],
})
export class MonthViewComponent implements OnInit {
  employees: Employee[] = [
    { id: 1, initials: 'JP', name: 'Jiří Palíšek' },
    { id: 2, initials: 'LŠ', name: 'Lucie Škubalová' },
    { id: 3, initials: 'ToV', name: 'Tomáš' },
    { id: 4, initials: 'TáV', name: 'Táňa' },
  ];
  workplaces: Workplace[] = [
    {
      id: 1,
      name: 'Služba 1',
      capacity: 1,
    },
    {
      id: 2,
      name: 'Služba 2',
      capacity: 1,
    },
    {
      id: 3,
      name: 'CT 1',
      capacity: 1,
    },
    {
      id: 4,
      name: 'CT 2',
      capacity: 1,
    },
    {
      id: 5,
      name: 'ŘD',
    },
  ];

  shifts: Shift[] = [
    {
      id: 1,
      date: new Date('2021-10-01'),
      isHoliday: false,
      isWeekend: false,
      items: [
        { id: 1, idShift: 1, idWorkplace: 1, idEmployees: [1] },
        { id: 2, idShift: 1, idWorkplace: 2, idEmployees: [2] },
        { id: 3, idShift: 1, idWorkplace: 3, idEmployees: [] },
        { id: 4, idShift: 1, idWorkplace: 4, idEmployees: [] },
        { id: 5, idShift: 1, idWorkplace: 5, idEmployees: [3, 4] },
      ],
    },
    {
      id: 2,
      date: new Date('2021-10-02'),
      isHoliday: false,
      isWeekend: true,
      items: [
        { id: 6, idShift: 2, idWorkplace: 1, idEmployees: [3] },
        { id: 7, idShift: 2, idWorkplace: 2, idEmployees: [] },
        { id: 8, idShift: 2, idWorkplace: 3, idEmployees: [] },
        { id: 9, idShift: 2, idWorkplace: 4, idEmployees: [] },
        { id: 10, idShift: 2, idWorkplace: 5, idEmployees: [] },
      ],
    },
    {
      id: 3,
      date: new Date('2021-10-03'),
      isHoliday: false,
      isWeekend: true,
      items: [
        { id: 11, idShift: 3, idWorkplace: 1, idEmployees: [4] },
        { id: 12, idShift: 3, idWorkplace: 2, idEmployees: [] },
        { id: 13, idShift: 3, idWorkplace: 3, idEmployees: [] },
        { id: 14, idShift: 3, idWorkplace: 4, idEmployees: [] },
        { id: 15, idShift: 3, idWorkplace: 5, idEmployees: [] },
      ],
    },
    {
      id: 4,
      date: new Date('2021-10-04'),
      isHoliday: false,
      isWeekend: false,
      items: [
        { id: 16, idShift: 4, idWorkplace: 1, idEmployees: [] },
        { id: 17, idShift: 4, idWorkplace: 2, idEmployees: [] },
        { id: 18, idShift: 4, idWorkplace: 3, idEmployees: [] },
        { id: 19, idShift: 4, idWorkplace: 4, idEmployees: [] },
        { id: 20, idShift: 4, idWorkplace: 5, idEmployees: [] },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
