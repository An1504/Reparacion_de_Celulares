class Celular{
	Modelo;
	Marca;
	Color;
	cliente;
	

	constructor(Modelo, Marca, Color,){
		this.Modelo=Modelo;
		this.Marca=Marca;
		this.Color=Color;
	}

	asignarCliente(cliente){
		this.cliente = cliente;
	}
}