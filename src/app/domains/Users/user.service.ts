import { Injectable, signal } from '@angular/core';
import { User } from '../Shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = signal<User>({
    name: "Jose Fabian",
    lastName: "Abad",
    nickname: "Andaluz",
    genre: "M",
    email: "jfabianabadd@gmail.com",
    phone: "98146391760",
    category: "SUB 18",
    level: "Muy Bueno",
    address: "Jr. Luis N. Saenz 549",
    birth: new Date("2006-04-05T00:00:00"),
    occupation: "Estudiante",
    club: "Real Club de Lima",
    image1: "https://frontonistas.com/wp-content/uploads/2023/07/2023-07-18_17-18-300x430.png",
    image2: "https://frontonistas.com/wp-content/uploads/2023/07/fabi.jpg"
  });
  users = signal<User[]>([
    {
      name: "Jose Fabian",
      lastName: "Abad",
      nickname: "Andaluz",
      genre: "M",
      email: "jfabianabadd@gmail.com",
      phone: "98146391760",
      category: "SUB 18",
      level: "Muy Bueno",
      address: "Jr. Luis N. Saenz 549",
      birth: new Date("2006-04-05T00:00:00"),
      occupation: "Estudiante",
      club: "Real Club de Lima",
      image1: "https://frontonistas.com/wp-content/uploads/2023/07/2023-07-18_17-18-300x430.png",
      image2: "https://frontonistas.com/wp-content/uploads/2023/07/fabi.jpg"
    },
    {
      name: "Christian",
      lastName: "Alfaro",
      nickname: "Push it",
      genre: "M",
      email: "ccalfaro@msn.com",
      phone: "962411018",
      category: "+35 MAYORES",
      level: "Intermedio",
      address: "Chorrillos",
      birth: new Date("0001-01-01T00:00:00"),
      occupation: "Administrador de empresas Ingeniero empresarial",
      club: "Cancha de la Curva",
      image1: "",
      image2: "https://frontonistas.com/wp-content/uploads/2023/07/christian-alfaro-300x430.jpg"
    }
  ])


  
  constructor() { }

  getUsersByLevel(level: string | null) {
    if (!level) return this.users();
    return this.users().filter(user => user.level == level);
  }

  getUsersByQuery(query: string | null) {
    if (!query) return this.users();
    return this.users().filter(user => 
        (user.name + user.lastName + user.nickname).toLowerCase()
        .includes(query.toLowerCase()));
  }
}
