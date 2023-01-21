import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-grants',
  templateUrl: './table-grants.component.html',
  styleUrls: ['./table-grants.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class TableGrantsComponent implements OnInit {
  @ViewChild('outerSort', { static: true }) sort: MatSort;
  @ViewChildren('innerSort') innerSort: QueryList<MatSort>;
  @ViewChildren('innerTables') innerTables: QueryList<MatTable<Employee>>;

  data: grant[] = GRANT;
  dataSource: MatTableDataSource<grant>;
  grantData: grant[] = [];
  //columnsToDisplay = [{'type':'סןג מענק'}, {'num':'מספר מענק'}, {'cost_center':'מרכז עלות'},{'desc':'תאור'}];
  columnsToDisplay = [{key:'type',value:'סוג'},{key:'num',value:'מס מענק'},{key:'cost_center',value:'מרכז עלות'},{key:'desc',value:'תאור'}];
  columnsToDisplay2 = this.columnsToDisplay.map((a) => a.key);
  innerDisplayedColumns = [
    {key:'num',value:'מס עוובד'}, 
    {key:'firstName',value:'שם פרטי'},
  {key:'lastName',value:'שם משפחה'},
  {key:'grant_num',value:'מס מענק'},{key:'grant_name',value:'שם מענק'},{key:'desc',value:'תאור'}];
  innerDisplayedColumns2 = this.innerDisplayedColumns.map((a) => a.key);
  innerInnerDisplayedColumns=[
  {key:'num',value:'מס עובד'},
  {key:'firstName',value:'שם פרטי'},
  {key:'lastName',value:'שם משפחה'},
  {key:'grant_num',value:'מס מענק'},
  {key:'grant_name',value:'שם מענק'},
  {key:'startDate',value:'ת. תחילת מינוי'},
  {key:'endDate',value:'ת. סיום מינוי'},
  {key:'hours',value:'שעות'},
  {key:'extent',value:'היקף'},
  {key:'sum',value:'סכום'},
  {key:'month_sum',value:'סכום חודשי'}]
  innerInnerDisplayedColumns2 = ['num', 'firstName', 'lastName','grant_num','grant_name','startDate','endDate','hours','extent','sum','month_sum'];
  expandedElement: grant | null;
  expandedElements: any[] = [];
  emploeey: Employee[];
  constructor(
    private cd: ChangeDetectorRef
  ) { }
  ngOnInit() {
    GRANT.forEach(grant => {
      if (
        grant.emploeey &&
        Array.isArray(grant.emploeey) &&
        grant.emploeey.length
      ) {
        this.grantData = [
          ...this.grantData,
          { ...grant, emploeey: new MatTableDataSource(grant.emploeey) }
        ];
      } else {
        this.grantData = [...this.grantData, grant];
      }
    });
    this.dataSource = new MatTableDataSource(this.grantData);
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.innerTables.forEach(
      (table, index) =>
        ((table.dataSource as MatTableDataSource<
          Employee
        >).filter = filterValue.trim().toLowerCase())
    );
  }

  toggleRow(element: grant) {
    element.emploeey &&
    (element.emploeey as MatTableDataSource<Employee>).data.length
      ? this.toggleElement(element)
      : null;
    this.cd.detectChanges();
    this.innerTables.forEach(
      (table, index) =>
        ((table.dataSource as MatTableDataSource<
          Employee
        >).sort = this.innerSort.toArray()[index])
    );
  }

  isExpanded(row: grant): string {
    const index = this.expandedElements.findIndex(x => x.num == row.num);
    if (index !== -1) {
      return 'expanded';
    }
    return 'collapsed';
  }

  toggleElement(row: grant) {
    const index = this.expandedElements.findIndex(x => x.num == row.num);
    if (index === -1) {
      this.expandedElements.push(row);
    } else {
      this.expandedElements.splice(index, 1);
    }

    //console.log(this.expandedElements);
  }
}

export interface grant {
  type: string;
  num: string;
  cost_center: string;
  desc?: string;
  emploeey?:Employee[]| MatTableDataSource<Employee>;
}
export interface Employee {
  num: string;
  firstName: string;
  lastName?: string;
  grant_num?: number;
  grant_name?:string;
  desc?:string;
  deatils_empoeey?:EmployeeDetails[]|MatTableDataSource<EmployeeDetails>;
}
export interface EmployeeDetails {
  num: string;
  firstName: string;
  lastName?: string;
  grant_num?: number;
  grant_name?:string;
  startDate?:string;
  endDate?:string;
  hours?:string;
  extent?:string;
  sum?:number;
  month_sum?:number;
 
}

  export interface User {
    name: string;
    email: string;
    phone: string;
    addresses?: Address[] | MatTableDataSource<Address>;
  }
  
  export interface Address {
    street: string;
    zipCode: string;
    city: string;
  }
  
  export interface UserDataSource {
    name: string;
    email: string;
    phone: string;
    addresses?: MatTableDataSource<Address>;
    emploeey?:MatTableDataSource<Employee>;
  }
  const GRANT:grant[]=[
    {
    type:"חיצוני",
    num:"100",
    cost_center:"12000",
    desc:"מענק לדוגמא מספר 1",
    emploeey:[{
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
      desc:"עוזר חוקר",
     deatils_empoeey:[{
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  }]
      
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
     
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    }]
  },
  {
    type:"חיצוני",
    num:"100",
    cost_center:"12000",
    desc:"מענק לדוגמא מספר 1",
    emploeey:[{
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
      desc:"עוזר חוקר",
     deatils_empoeey:[{
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  }]
      
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
     
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    }]
  },
  {
    type:"חיצוני",
    num:"100",
    cost_center:"12000",
    desc:"מענק לדוגמא מספר 1",
    emploeey:[{
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
      desc:"עוזר חוקר",
     deatils_empoeey:[{
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  }]
      
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
     
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    }]
  },
  {
    type:"חיצוני",
    num:"100",
    cost_center:"12000",
    desc:"מענק לדוגמא מספר 1",
    emploeey:[{
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
      desc:"עוזר חוקר",
     deatils_empoeey:[{
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  }]
      
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
     
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    }]
  },
  {
    type:"חיצוני",
    num:"100",
    cost_center:"12000",
    desc:"מענק לדוגמא מספר 1",
    emploeey:[{
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
      desc:"עוזר חוקר",
     deatils_empoeey:[{
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  }]
      
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
     
    },
    {
      num: "00000000000",
      firstName: "טובה",
      lastName: "פריימן",
      grant_num: 100000000,
      grant_name:"מענק לדוגמא",
    
    }]
  },
 ]
  const EMLOEEY:EmployeeDetails[]=[{
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  },
  {
    num: "00000000000",
    firstName: "טובה",
    lastName: "פריימן",
    grant_num: 100000000,
    grant_name:"מענק לדוגמא",
    startDate:"01/01/2023",
    endDate:"01/01/2024",
    hours:"30",
    extent:"10",
    sum:10000,
    month_sum:1520255,
  }]
  const USERS: User[] = [
    {
      name: "Mason",
      email: "mason@test.com",
      phone: "9864785214",
      addresses: [
        {
          street: "Street 1",
          zipCode: "78542",
          city: "Kansas"
        },
        {
          street: "Street 2",
          zipCode: "78554",
          city: "Texas"
        }
      ]
    },
    {
      name: "Eugene",
      email: "eugene@test.com",
      phone: "8786541234",
    },
    {
      name: "Jason",
      email: "jason@test.com",
      phone: "7856452187",
      addresses: [
        {
          street: "Street 5",
          zipCode: "23547",
          city: "Utah"
        },
        {
          street: "Street 5",
          zipCode: "23547",
          city: "Ohio"
        }
      ]
    }
  ];
  

