import { Component, OnInit, ViewChild } from '@angular/core';
import { Guardian } from 'src/app/shared/model/guardian';
import { GuardianService } from 'src/app/shared/services/guardian.service';
import {MatTableDataSource} from "@angular/material/table";
import { MatPaginator } from '@angular/material/paginator';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  
  dataSource: MatTableDataSource<Guardian>;

  displayedColumns: string[] = ['Nome', 'Email', 'Telefone', 'Tipo', 'Ações'];
  
  @ViewChild(MatPaginator) paginator!: MatPaginator

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
  constructor(private guardianService: GuardianService, private _snackBar: MatSnackBar, private router: Router) {
    this.dataSource = new MatTableDataSource<Guardian>();
  }

  ngOnInit() {
    this.loadGuardians();
  }

  loadGuardians(): void {
    this.guardianService.list().subscribe(guardiansReturned => {
      this.dataSource = new MatTableDataSource<Guardian>(guardiansReturned);
      this.dataSource.paginator = this.paginator;
    });
  }

  remove(guardianToRemove: Guardian): void {
    this.guardianService.delete(guardianToRemove).subscribe( guardianRemoved => {
      this._snackBar.open('Responsável removido', 'Fechar', { duration: 5000 });
      this.loadGuardians();
    });
  }

  filter(evento: Event): void {
    const texto = (evento.target as HTMLInputElement).value;
    this.dataSource.filter = texto;
  }

  edit(id: string): void {
    console.log('id');
    console.log(id);
    this.router.navigate(['edit-guardian', id]);
  }
}
