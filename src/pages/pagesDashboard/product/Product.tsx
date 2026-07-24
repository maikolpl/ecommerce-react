import { Link, useParams } from 'react-router-dom'
import './Product.css'
import { rowsProducts } from '../../../mocks/data/ProductsRow';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import {
  Check,
  DeleteForever,
  Info,
  Inventory,
  KeyboardBackspace,
  Leaderboard,
  LocalOffer,
  LocalShipping
} from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';


export function Product() {
  const { productId } = useParams();

  const product = rowsProducts.find(
    product => product.id === Number(productId)
  )

  return (
    <div className="product">

      <div className="productTitleContainer">
        <h1 className='productTitle'>
          <ShoppingBagIcon className='shoppingIconTitle' />
          Detalle del Producto
        </h1>
          <Link to ='/dashboard/productList' className='linkProductList'>
          <button className='buttonBackProduct'>
          <KeyboardBackspace />
          volver
        </button>
          </Link>
        
      </div>

      <div className="productContainer">

        <div className="productLeft">

          <div className="productMain">

            <div className="producContainerImg">
              <img
                className='productImg'
                src={product?.img}
                alt={product?.producto}
              />
            </div>

            <div className="productInfo">

              <h4 className='productName'>
                {product?.producto}
              </h4>

              <div className="productState">
                <span className='state'>Activo</span>
                <p className='productId'>
                  ID: {product?.id}
                </p>
              </div>

              <span className='productPrice'>
                {product?.precioVenta}
              </span>

              <div className="productCategoriContainer">
                <LocalOffer className='iconCategori' />
                <p className='productCategori'>
                  {product?.categoria}
                </p>
              </div>

              <div className="productStockContainer">
                <p className='productStock'>
                  Prendas Disponibles:
                </p>

                <p className='productUnits'>
                  {product?.stock}
                </p>
              </div>

            </div>

          </div>

          <div className="productMainContent">
            <div className="detailsContainer">
              <Info className='iconDetails' />
              <h5>Información</h5>
            </div>

            <div className="detailsContainer">
              <Inventory className='iconDetails' />
              <h5>Inventario</h5>
            </div>

            <div className="detailsContainer">
              <Leaderboard className='iconDetails' />
              <h5>Ventas</h5>
            </div>

            <div className="detailsContainer">
              <LocalShipping className='iconDetails' />
              <h5>Proveedores</h5>
            </div>

          </div>

          <div className="descriptionProducto">

            <h3 className='descriptionTitle'>
              Descripción del Producto
            </h3>

            <p className='description'>
              {product?.descripcion}
            </p>

            <h3 className='characteristicsTitle'>
              Caracteristicas
            </h3>

            <ul className='characteristics'>
              <li className='feature'>
                <Check className='iconCheck' />
                {product?.caracteristicas.primera}
              </li>

              <li className='feature'>
                <Check className='iconCheck' />
                {product?.caracteristicas.segunda}
              </li>

              <li className='feature'>
                <Check className='iconCheck' />
                {product?.caracteristicas.tercera}
              </li>

              <li className='feature'>
                <Check className='iconCheck' />
                {product?.caracteristicas.cuarta}
              </li>

              <li className='feature'>
                <Check className='iconCheck' />
                {product?.caracteristicas.quinta}
              </li>
            </ul>

          </div>

        </div>

        <div className="productRight">
        <h3 className='InfoTitle'>Informacion General</h3>
        <div className="infoProductDetails">
            <p className='infoDetails'>Categoria: <span className='infoDetailsElement'>{product?.categoria}</span></p>
            <p className='infoDetails'>Marca: <span className='infoDetailsElement'>{product?.marca}</span></p>
            <p className='infoDetails'>Proveedor:<span className='infoDetailsElement'>{product?.proveedor}</span> </p>
            <p className='infoDetails'> Fecha de Creacion: <span className='infoDetailsElement'>{product?.fechaCreacion}</span></p>
            <p className='infoDetails'>Ultima actualización: <span className='infoDetailsElement'>{product?.ultimaActualizacion}</span> </p>
        </div>
        <div className="infoProductDetails">
            <h3 className='InfoTitle'>Precios</h3>
            <p className='infoDetails'>Precio de Compra: <span className='infoDetailsElement'>{product?.precioCompra}</span></p>
            <p className='infoDetails'>Precio de Venta: <span className='infoDetailsElement'>{product?.precioVenta}</span></p>
            <p className='infoDetails'>Margen de Ganancia: <span className='infoDetailMargen'>{product?.margen}</span></p>
        </div>

        <div className="infoProductDetailsInventory">
            <h3 className='InfoTitle'>Inventario</h3>
            <p className='infoDetails'>prendas Disponible: <span className='infoDetailStock'>{product?.stock} unidades</span></p>
            <p className='infoDetails'>prendas Minimo: <span className='infoDetailMin'>{product?.minimo} unidades</span></p>
            <p className='infoDetails'>prendas Maximo: <span className='infoDetailMax' >{product?.maximo} unidades</span></p>
        </div>
          <Link to={`/dashboard/productEdit/${product?.id}`} className='linkProductEdit'>
          <button className='editProduct'> <EditIcon className='editIconProduct'/>Editar Producto</button>
          </Link>
        <button className='eliminateProduct'><DeleteForever className='elimateProductIcon'/> Eliminar Producto</button>
        </div>

      </div>

    </div>
  )
}