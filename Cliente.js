var cliente = [];
class Cliente{
    Nombre;
    Direccion;
    Fecha_nacimiento;
    Num_referencia;
    celular = [];

    constructor(nombre,direccion,fecha_nacimiento,num_referencia){
        this.Nombre=nombre;
        this.Direccion=direccion;
        this.Fecha_nacimiento=fecha_nacimiento;
        this.Num_referencia=num_referencia;
    }


    agregarCelular(celular){
        let celulares = this.celular;
        celulares.push(celular);
    }
}
function saveCliente() {
       let name = document.getElementById('name'). value;
       let  address = document.getElementById('address'). value;
       let  birthdate = document.getElementById('birthdate'). value;
       let  reference_number = document.getElementById('reference_number'). value;
        console.log(name, address,birthdate,reference_number)
       let cliente = new Cliente(name, address,birthdate,reference_number)
       cliente.push(cliente)

    }
   
