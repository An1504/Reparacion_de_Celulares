var Reparador1=[];
class Reparador{
    Nombre;
    Apellidos;
    Sueldo;
    Especialidad;
    Horarios;
    constructor(nombre,apellidos,sueldo,especialdad,horarios){
        this.Nombre=nombre;
        this.Apellidos=apellidos;
        this.Sueldo=sueldo;
        this.Especialidad=especialdad;
        this.Horarios=horarios;
       
    }
    
}
function crearReparador() {
    let Nombre = document.getElementById('name').value;
    let Apellidos = document.getElementById('lastname').value;
    let Sueldo = document.getElementById('salary').value;
    let Especialidad = document.getElementById('speciality').value;
    let Horarios= document.getElementById('hours').value;
    var insertar = document.getElementById(Reparador1).innerHTML= [Nombre,Apellidos,Sueldo,Especialidad,Horarios];
    
    Reparador1.push(insertar);
}