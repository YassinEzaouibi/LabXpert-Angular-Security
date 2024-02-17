export class User {
  id: number;
  nom: string;
  prenom: string;
  address: string;
  tel: string;
  ville: string;
  sexe: string;
  dateNaissance: string;
  email: string;
  role: string;
  password: string;


  constructor( id: number,
               nom: string,
               address: string,
               tel: string,
               ville: string,
               sexe: string,
               dateNaissance: string,
               email: string,
               role: string,
               password: string
  ){
    this.id = id;
    this.nom = nom;
    this.address = address;
    this.tel = tel;
    this.ville = ville;
    this.sexe = sexe;
    this.dateNaissance = dateNaissance;
    this.email = email;
    this.role = role;
    this.password = password;
  }
}
