// Importamos tipos de forma separada
import type { Producto, Categoria } from './inventario';

// Importamos funciones normalmente
import { clasificarInventario, agregarStock, totalizarPorCategoria } from './inventario';

// 3.1) Inventario inicial
const inventario: Producto[] = [
  { id: 1, nombre: 'Laptop Pro 14"', categoria: 'Electrónica', precio: 1200, stock: 3, proveedor: 'TecnoHn' },
  { id: 2, nombre: 'Camiseta Algodón', categoria: 'Textil', precio: 15, stock: 12 },
  { id: 3, nombre: 'Arroz 1kg', categoria: 'Alimentos', precio: 2.5, stock: 0, proveedor: 'AgroDistrib' },
  { id: 4, nombre: 'Audífonos BT', categoria: 'Electrónica', precio: 45, stock: 6 },
];

// 3.2) Clasificación de inventario
const reporte = clasificarInventario(inventario[0]);
console.log('Reporte de inventario (producto 1):', reporte);

// 3.3) Actualización (inmutabilidad)
const productoActualizado = agregarStock(inventario[2], 8); // sumamos stock al que tenía 0
console.log('Antes (producto 3):', inventario[2]);
console.log('Después (producto 3 actualizado):', productoActualizado);

const inventarioActualizado: Producto[] = [
  ...inventario.slice(0, 2),     // copia los dos primeros elementos (índices 0 y 1)
  productoActualizado,           // coloca el producto 3 ya actualizado (índice 2)
  ...inventario.slice(3)         // copia desde el índice 3 en adelante
];

console.log('Inventario actualizado:', inventarioActualizado);

// 3.4) Totalización por categoría
const categoria: Categoria = 'Alimentos';
const totalAlimentos = totalizarPorCategoria(inventarioActualizado, categoria);
console.log(`Valor total de la categoría ${categoria}:`, totalAlimentos);
