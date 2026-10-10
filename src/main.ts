import { sumar } from './utils';

// === TIPADO ESTÁTICO ===
let productoNombre: string = "Laptop";
let productoPrecio: number = 1200;
let productoEnStock: boolean = true;
console.log(`Producto: ${productoNombre}, Precio: $${productoPrecio}, En stock: ${productoEnStock}`);


// === TIPO ANY Y UNKNOWN ===
let datosAPI: unknown = JSON.parse('{"nombre": "tablet", "precio": 300}');
if (typeof datosAPI === 'object' && datosAPI !== null) {
  let producto = datosAPI as { nombre: string; precio: number };
  console.log(`Producto API: ${producto.nombre} - $${producto.precio}`);
}


// === TIPO VOID Y NEVER ===
function registrarMensaje(mensaje: string): void {
  console.log("LOG:", mensaje);
}
registrarMensaje("Sistema iniciado correctamente.");


// === ARRAYS, TUPLAS Y ENUMS ===
let usuariosIDs: number[] = [101, 102, 103];
let gpsCoordenadas: [number, number] = [40.7128, -74.0060];

enum EstadoOrden {
  Pendiente,
  Enviada,
  Entregada,
  Cancelada
}
let miOrdenEstado: EstadoOrden = EstadoOrden.Enviada;

console.log(`IDs: ${usuariosIDs.join(", ")}`);
console.log(`GPS: ${gpsCoordenadas[0]}, ${gpsCoordenadas[1]}`);
console.log(`Estado de Orden: ${EstadoOrden[miOrdenEstado]}`);


// === UNION TYPES, TYPE ALIASES E INTERSECTION TYPES ===
type ID = string | number;
let miId: ID = "a-123";

type Empleado = { nombre: string; email: string };
type Desarrollador = Empleado & { lenguaje: string; senioridad: "junior" | "senior" };

let nuevoDev: Desarrollador = {
  nombre: "Carlos",
  email: "carlos@empresa.com",
  lenguaje: "TypeScript",
  senioridad: "junior"
};
console.log(`Dev: ${nuevoDev.nombre} (${nuevoDev.senioridad})`);


// === PARÁMETROS DE FUNCIONES ===
function saludar(nombre: string = 'Desconocido', titulo?: string, ...amigos: string[]): string {
  let saludo = titulo ? `${titulo} ${nombre}` : nombre;
  if (amigos.length > 0) {
    saludo += `, y tus amigos ${amigos.join(', ')}`;
  }
  return `Hola, ${saludo}.`;
}

console.log(saludar());
console.log(saludar("Ana"));
console.log(saludar("Pedro", "Sr."));
console.log(saludar("Maria", undefined, "Juan", "Pedro"));


// === INTERFACES Y PROPIEDADES ===
interface Usuario {
  readonly id: number;
  nombre: string;
  email?: string;
}

let usuario: Usuario = { id: 10, nombre: "Luis" };
usuario.email = "luis@correo.com";
console.log(`Usuario: ${usuario.nombre} (${usuario.email})`);


// === CLASES Y MODIFICADORES DE ACCESO ===
class Vehiculo {
  protected ruedas: number;
  constructor(ruedas: number) {
    this.ruedas = ruedas;
  }
  public arrancar(): void {
    console.log("El vehículo está arrancando.");
  }
}

class Coche extends Vehiculo {
  public marca: string;
  private _velocidad: number = 0;

  constructor(ruedas: number, marca: string) {
    super(ruedas);
    this.marca = marca;
  }

  public getInfo(): void {
    console.log(`Este coche es un ${this.marca} y tiene ${this.ruedas} ruedas.`);
  }

  public acelerar(cantidad: number): void {
    this._velocidad += cantidad;
    console.log(`Velocidad de ${this.marca}: ${this._velocidad} km/h`);
  }
}

const miCoche = new Coche(4, "Toyota");
miCoche.arrancar();
miCoche.getInfo();
miCoche.acelerar(50);


// === TIPOS GENÉRICOS ===
class Cola<T> {
  private items: T[] = [];

  agregar(item: T): void {
    this.items.push(item);
  }

  obtenerPrimerElemento(): T | undefined {
    return this.items.shift();
  }
}

const colaNumeros = new Cola<number>();
colaNumeros.agregar(10);
colaNumeros.agregar(20);
console.log(`Primer número en cola: ${colaNumeros.obtenerPrimerElemento()}`);

const colaCadenas = new Cola<string>();
colaCadenas.agregar('Pepe');
colaCadenas.agregar('Maria');
console.log(`Primer nombre en cola: ${colaCadenas.obtenerPrimerElemento()}`);


// === MÓDULOS ===
const resultado = sumar(5, 10);
console.log(`Resultado de la suma importada: ${resultado}`);