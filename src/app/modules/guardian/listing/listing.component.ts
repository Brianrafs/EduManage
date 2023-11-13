import { Component, OnInit } from '@angular/core';
import { Guardian } from 'src/app/shared/model/guardian';
import { GuardianService } from 'src/app/shared/services/guardian.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  guardians: Guardian[] = [];
  guardianSearch: Array<Guardian> = [];

  constructor(private guardianService: GuardianService) {
  }

  ngOnInit() {
    this.guardianService.list().subscribe(guardiansReturned =>
      {
        this.guardians = guardiansReturned;
      }
    );
  }

  remover(guardianToRemove: Guardian): void {
    this.guardianService.delete(guardianToRemove).subscribe( guardianRemoved => {
        console.log('Responsável removido');
      const idxToRemove = this.guardians.findIndex(guardian =>
        guardian.id === guardianToRemove.id);

      if (idxToRemove >= 0) {
        this.guardians.splice(idxToRemove, 1);
      }

      }
    );

  }

  /* pesquisar(name: string) {
    if (name.length == 0) {
      this.guardianSearch = [];
    }
    this.guardians.forEach(guardian => {
      if (guardian.fullName.startsWith(name)) {
        this.guardianSearch.push(guardian);
      }
    });
  } */
}
