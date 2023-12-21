import {Component, OnInit, ViewChild} from '@angular/core';
import {Guardian} from 'src/app/shared/model/guardian';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from '@angular/material/paginator';
import {Router} from '@angular/router';
//import { GuardianFirestoreService } from 'src/app/shared/services/guardian-firestore.service';
import {SnackMenssegerService} from "../../../shared/services/snack-mensseger.service";
import {GuardianService} from "../../../shared/services/guardian.service";

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
  constructor(private guardianService: GuardianService, private snackMenssegerService: SnackMenssegerService, private router: Router) {
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
      this.snackMenssegerService.success('Responsável'+ guardianRemoved +' removido');
      this.loadGuardians();
    });
  }

  filter(event: Event): void {
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  edit(id: string): void {
    this.router.navigate(['edit-guardian', id]);
  }
}
