import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {from, map, Observable} from "rxjs";
import {Guardian} from "../model/guardian";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";

@Injectable({
  providedIn: 'root'
})
export class AlunoFirestoreService {

  colecaoAlunos: AngularFirestoreCollection<Guardian>;
  NOME_COLECAO = 'guardians';

  constructor(private afs: AngularFirestore) {
    this.colecaoAlunos = afs.collection(this.NOME_COLECAO);
  }

  list(): Observable<Guardian[]> {
    return this.colecaoAlunos.valueChanges({idField: 'id'});
  }

  cadastrar(aluno: Guardian): Observable<Guardian> {
    delete aluno.id;
    return from(this.colecaoAlunos.add({...aluno}));
  }

  remover(aluno: Guardian): Observable<any> {
    return from(this.colecaoAlunos.doc(aluno.id).delete());
  }

  pesquisarPorId(id: string): Observable<Guardian> {
    return this.colecaoAlunos.doc(id).get().pipe(map(document =>
      new Guardian(id, document.data())));
  }

  atualizar(aluno: Guardian): Observable<void> {
    return from(this.colecaoAlunos.doc(aluno.id).update({...aluno}));
  }

  pesquisarPorMatricula(matricula: string): Observable<Guardian[]> {
    let alunoPorMatricula: AngularFirestoreCollection<Guardian>;
    alunoPorMatricula = this.afs.collection(this.NOME_COLECAO, ref =>
      ref.where('matricula', '==', matricula));
    return alunoPorMatricula.valueChanges();
  }
}

