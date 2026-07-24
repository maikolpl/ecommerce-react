import { Link, useParams } from 'react-router-dom'
import './ProductEdit.css'
import  { rowsProducts } from '../../../mocks/data/ProductsRow'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Article, Assignment, AssignmentAdd, BusinessCenterSharp, CloseOutlined, Description, Info, Inventory, Leaderboard, LocalOffer, LocalShipping, PrivacyTipOutlined } from '@mui/icons-material';


export function ProductEdit(){
const {productId} = useParams()

const product = rowsProducts.find(
    product => product.id === Number(productId)
)
return(
    <div className="productEdit">
        <div className="productEditTitleContainer">
        <h1 className='productEditTitle'>
            <BusinessCenterSharp className='productEditTitleIcon'/>
            Editar Producto
        </h1>
     <Link to ='/dashboard/newProduct' className='linkProductList'>
        <button className='backProductEdit'><ArrowBackIcon/> Crear Producto</button>
        </Link>
        </div>

        <div className="productEditContainer">
            <div className="productPreview">
                <div className="productEditPreviewTopContainer">
                    <div className="productPreviewTop">
                    <div className="productPreviewTopImg">
                    <img src={product?.img} alt={product?.producto} className='productPreviewImg' />
                    </div>
                    <div className="productEditInfoTop">
                            <h3 className='productEditName'>{product?.producto}</h3>
                            <div className="productEditInfoState">
                            <span className='editState'>Activo</span>
                            <p className='productEditId'>ID:{product?.id}</p>
                            </div>
                            <span className='productEditPrice'>{product?.precioVenta}</span>
                            <div className="productEditCategoriContainer">
                            <LocalOffer className='productEditiconCategori' />
                            <p className='productEditCategori'>
                            {product?.categoria}
                            </p>
                            </div>
                            <div className="productEditStockContainer">
                            <p className='productEditStock'>
                            Prendas Disponibles:
                            </p>
                            <p className='productEditUnits'>
                            { product?.stock} Unidades
                            </p>
                            </div>
                    </div> 
                </div> 
                </div>
                <div className="productPreviewEditMid">
                    <div className="productEditDetailsContainer">
                            <Info className='productEditIconDetails' />
                            <h5>Información</h5>
                    </div>

                    <div className="productEditDetailsContainer">
                            <Inventory className='productEditIconDetails' />
                            <h5>Inventario</h5>
                    </div>

                    <div className="productEditDetailsContainer">
                            <Leaderboard className='productEditIconDetails' />
                            <h5>Ventas</h5>
                    </div>

                    <div className="productEditDetailsContainer">
                            <LocalShipping className='productEditIconDetails' />
                            <h5>Proveedores</h5>
                    </div>
                </div>

                <div className="productPreviewEditBottom">
                    <div className="productEditFecha">
                        <p className='product-P'>Fecha De Creación:</p>
                        <p className='product-prop'>{product?.fechaCreacion}</p>
                    </div>
                    <div className="productEditFecha">
                        <p className='product-P'>Ultima Actualización:</p>
                        <p className='product-prop'>{product?.ultimaActualizacion}</p>
                    </div>
                </div>
            </div>
            <div className="productEditForm">

            <form className='productEditFormContainer'>
                <div className="titleContainer">
                    <Assignment className='productEditTitleInfoIcon'/>
                    <h3 className='productEditFormTitle'>Información Basica</h3>
                </div>
                
                    <div className="productEditFormBasicInfo">
                    <div className="productEditColumnContainer">
                        <label>Nombre Del Producto</label>
                        <input type="text" placeholder={product?.producto} className="productEditInput"/>
                    </div>

                    <div className="productEditColumnContainer">
                    <label>Categoria</label>
                    <input type="text" placeholder={product?.categoria} className='productEditInput' />
                    </div>

                    <div className="productEditColumnContainer">
                    <label>Estado</label>
                            <select name="state" className="productEditSelectState">
                                <option value="">Activo</option>
                                <option value="pendiente">Pendiente</option>
                                <option value="cancelado">Cancelado</option>
                            </select>
                    </div>

                    <div className="productEditColumnContainer">
                    <label>Marca</label>
                    <input type="text" placeholder={product?.marca} className='productEditInput' />
                    </div>

                    <div className="productEditColumnContainer">
                    <label>Proveedor</label>
                    <input type="text" placeholder={product?.proveedor} className='productEditInput' />
                    </div>

                    <div className="productEditColumnContainer">
                    <label>Precio De Venta</label>
                    <input type="text" placeholder={product?.precioVenta} className='productEditInput' />
                    </div>

                    <div className="productEditColumnContainer">
                    <label>Precio De Compra</label>
                    <input type="text" placeholder={product?.precioCompra} className='productEditInput' />
                    </div>

                    <div className="productEditColumnContainer">
                    <label>Margen Ganancia</label>
                    <input type="text" placeholder={product?.margen} className='productEditInput' />
                    </div>
            </div>
                <div className="titleContainer">
                    <Article className='productEditTitleInfoIcon'/>
                <h3 className='productEditFormTitle'>Inventario</h3>
                </div>

                    <div className="productEditInventoryContainer">
                        <div className="productEditInventoryCamps">
                            <label>Prendas Disponibles</label>
                            <input type="text" placeholder={product?.stock} className='productEditInput' />
                        </div>
                        <div className="productEditInventoryCamps">
                            <label>Prendas Minimo</label>
                            <input type="text" placeholder={product?.minimo} className='productEditInput' />
                        </div>
                        <div className="productEditInventoryCamps">
                            <label>Prendas Maximo</label>
                            <input type="text" placeholder={product?.maximo} className='productEditInput' />
                        </div>
                    </div>

                    <div className="titleContainer">
                        <Description className='productEditTitleInfoIcon'/>
                        <h3 className='productEditFormTitle'>Descripción Del Producto</h3>
                </div>

                <div className="productEditDescriptionContainer">
                    <label>Descripcion</label>
                    <textarea placeholder={product?.descripcion} className='productEditDescription'></textarea>
                </div>

                <div className="titleContainer">
                    <PrivacyTipOutlined className='productEditTitleInfoIcon'/>
                        <h3 className='productEditFormTitle'>Caracteristicas Del Producto</h3>
                </div>

                <div className="productEditCaractersContainer">
                    <div className="productEditCaracter">
                        <label >Primera Caracteristica</label>
                        <input type="text" placeholder={product?.caracteristicas.primera} className='productEditInput' />
                    </div>

                    <div className="productEditCaracter">
                        <label >Segunda Caracteristica</label>
                        <input type="text" placeholder={product?.caracteristicas.segunda} className='productEditInput' />
                    </div>

                    <div className="productEditCaracter">
                        <label >Tercera Caracteristica</label>
                        <input type="text" placeholder={product?.caracteristicas.tercera} className='productEditInput' />
                    </div>

                    <div className="productEditCaracter">
                        <label >cuarta Caracteristica</label>
                        <input type="text" placeholder={product?.caracteristicas.cuarta} className='productEditInput'/>
                    </div>

                    <div className="productEditCaracter">
                        <label >quinta Caracteristica</label>
                        <input type="text" placeholder={product?.caracteristicas.quinta} className='productEditInput' />
                    </div>
                </div>
                <footer className='buttonsContainer'>
                <button className='buttonCancel'><CloseOutlined className='productCloseIcon'/> Cancelar</button>
                <button className='buttonUpdate'><AssignmentAdd className='productUpdateIcon'/>Actualizar Producto</button>
                </footer>
                
             </form>
             </div>
        </div>

    </div>
)

}