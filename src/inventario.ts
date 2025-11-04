// 1) Modelado de datos
export type Categoria = 'Electrónica' | 'Alimentos' | 'Textil';

export interface Producto {
  id: number;
  nombre: string;
  categoria: Categoria; // unión literal
  precio: number;
  stock: number;
  proveedor?: string;   // opcional
}

export type EstadoInventario = 'Disponible' | 'Bajo Stock' | 'Agotado';

export interface ReporteProducto {
  producto: Producto;
  estado: EstadoInventario;
}

// 2) Tipado estricto de funciones

/**
 * Analiza el stock y clasifica el producto.
 * - 0          -> 'Agotado'
 * - 1..5       -> 'Bajo Stock'
 * - >= 6       -> 'Disponible'
 */
export function clasificarInventario(producto: Producto): ReporteProducto {
  let estado: EstadoInventario;

  if (producto.stock === 0) {
    estado = 'Agotado';
  } else if (producto.stock <= 5) {
    estado = 'Bajo Stock';
  } else {
    estado = 'Disponible';
  }

  return { producto, estado };
}

/*
 Devuelve un **nuevo** objeto Producto con el stock actualizado (inmutabilidad)
 */
export function agregarStock(producto: Producto, cantidad: number): Producto {
  if (!Number.isFinite(cantidad)) {
    throw new TypeError('La cantidad debe ser un número finito.');
  }
  if (cantidad < 0) {
    throw new RangeError('La cantidad no puede ser negativa.');
  }

  return {
    ...producto,
    stock: producto.stock + cantidad,
  };
}

/*
 Totaliza el valor (precio * stock) de una categoría específica.
 */
export function totalizarPorCategoria(
  inventario: Producto[],
  categoria: Categoria
): number {
  return inventario
    .filter((p) => p.categoria === categoria)
    .reduce((acc, p) => acc + p.precio * p.stock, 0);
}
