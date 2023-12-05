import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Guardian } from '../model/guardian';

@Injectable({
  providedIn: 'root',
})
export class GuardianFirestoreService {
  guardiansCollection: AngularFirestoreCollection<Guardian>;
  COLLECTION_NAME = 'guardians';

  constructor(private afs: AngularFirestore) {
    this.guardiansCollection = afs.collection(this.COLLECTION_NAME);
  }

  list(): Observable<Guardian[]> {
    return this.guardiansCollection.valueChanges({ idField: 'id' });
  }

  register(guardian: Guardian): Observable<Guardian> {
    delete guardian.id;
    return from(this.guardiansCollection.add({ ...guardian }));
  }

  delete(guardian: Guardian): Observable<any> {
    return from(this.guardiansCollection.doc(guardian.id).delete());
  }

  searchById(id: string): Observable<Guardian | undefined> {
    return this.guardiansCollection.doc(id).get().pipe(
      map(document => {
        const data = document.data();
        return data ? { id, ...data } as Guardian : undefined;
      })
    );
  }

  update(guardian: Guardian): Observable<void> {
    return from(this.guardiansCollection.doc(guardian.id).update({ ...guardian }));
  }
}
