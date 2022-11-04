export class NuevoUsuario {
    nombre:string;
    nombreUsuario:string;
    email:string;
    password:string;

    constructor(nombre:string, nombreUsuario:string, email:string, password:string){
        this.email = email;
        this.nombre = nombre;
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
