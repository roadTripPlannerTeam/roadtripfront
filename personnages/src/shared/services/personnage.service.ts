import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Personnage } from '../interfaces/personnage';
import { filter, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  public personnages$: BehaviorSubject<Personnage[] | []> = new BehaviorSubject<Personnage[] | []>([]);

  constructor(private http : HttpClient) { }


/**
 * 
 * @returns observable sans subscribe on l'appelle dans app comment pour eviter de faire des call à chaque fois 
 */

  public fetchPersonnage(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>('http://localhost:3000/characters').pipe(
      tap(personnages  => { // dans le flux on va envoyer des données qui retourne un observable froid 
        this.personnages$.next(personnages);
      })
    );
  }

  /**
   * 
   * @param index  recuperer un personnage on passe le flux dans un pipe ensuite on filtre 
   * pour s'assurer de existance de notre personnages derriere on veut recupere un element
   * de ce flux par son index du coup on appel map qui le fait si bien 
   * @returns  renvoyer un obsevable froid de type personnage
   */
  public getPersonnage(index: number): Observable<Personnage> {
    return this.personnages$.pipe( // permet de realiser des opérations sur le flux 
      filter(personnages => personnages != null), // on s'assure qu'il y a des cocktails dans le flux 
      map((personnages: Personnage[]) => personnages[index]) // donc avec map on récupére un personnage pq on est sure qu'il existe aprés le filtre
    );
  }


  
  public addPersonnage(personnage: Personnage): Observable<Personnage> {
    return this.http
      .post<Personnage>('http://localhost:3000/characters', personnage)
      .pipe(
        tap((personnage: Personnage) => {
          this.personnages$.next([...this.personnages$.value, personnage]);
        })
      );
  }








}
