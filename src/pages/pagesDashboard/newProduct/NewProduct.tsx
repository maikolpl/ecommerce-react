import { AccessTimeFilled, AcUnit, Assignment, AttachMoney, CardGiftcard, Category, Close, ContentPaste, Create, Inventory2, LocalShipping, PostAddOutlined,  StarBorder, Visibility } from '@mui/icons-material';
import './NewProduct.css'
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';

export function NewProduct (){
    const [image,setImage] = useState('')
    return(
        <div className="newProduct">
            <div className="topContainer">
                <div className="newProductContainerTitle">
                <div className="iconContainer">
                    <AddIcon/>
                </div>
                <h1 className='newProductTitle'>  Crear Nuevo Producto</h1>
                </div>
                <div className="buttonsContainer">
                <button className='buttonCancelNewProduct'><Close className='iconCloseNewProduct'/>Cancelar</button>
                <button className='addNewProduct'><PostAddOutlined className='iconAddNewProduct'/>  Guardar Producto</button>
                </div>
            </div>

            <div className="midContainer">
                <form className="infoContainer">
                    <div className="midContainerTitle">
                        <Assignment className='productEditTitleInfoIcon'/>
                        <h3>Información Básica</h3>
                    </div>
                    <div className="formItemsInfoContainer">
                        <div className="newProductItem">
                            <label>Nombre Del Producto</label>
                            <input type="text" placeholder='Ej:Camiseta Basica Algodon' className="newProductInput"/>
                        </div>

                        <div className="newProductItem">
                            <label>Categoria</label>
                            <input type="text" placeholder='Ej:Camisetas' className="newProductInput"/>
                        </div>


                        <div className="newProductItem">
                            <label>Estado</label>
                            <select name="state" className="newProductSelect">
                                <option value="">Pendiente</option>
                                <option value="activo">Activo</option>
                                <option value="cancelado">Cancelado</option>
                            </select>
                        </div>

                        <div className="newProductItem">
                            <label>Marca</label>
                            <input type="text" placeholder='marca del producto' className="newProductInput"/>
                        </div>

                        <div className="newProductItem">
                            <label>Proveedor</label>
                            <input type="text" placeholder='ej:proveedor' className="newProductInput"/>
                        </div>

                        <div className="newProductItem">
                            <label>precio de venta</label>
                            <input type="text" placeholder='0.00' className="newProductInput"/>
                        </div>

                        <div className="newProductItem">
                            <label>Precio de Compra</label>
                            <input type="text" placeholder='0.00' className="newProductInput"/>
                        </div>

                        <div className="newProductItem">
                            <label>Margen de Ganancia</label>
                            <input type="text" placeholder='0' className="newProductInput"/>
                        </div>
                    </div>
                    
                    <div className="formInventoryContainer">
                        <div className="inventoryContainerTitle">
                            <Inventory2 className='iconInventory'/>
                            <h3 className='inventoryTitle'>Inventario</h3>
                        </div>

                        <div className="formItemsInventory">
                            <div className="newProductItem">
                            <label>Prendas Disponibles</label>
                            <input type="text" placeholder='0' className="newProductInput"/>
                        </div>

                        <div className="newProductItem">
                            <label>Prendas Minimo</label>
                            <input type="text" placeholder='0' className="newProductInput"/>
                        </div>

                        <div className="newProductItem">
                            <label>Prendas Maximo</label>
                            <input type="text" placeholder='0' className="newProductInput"/>
                        </div>

                        </div>
                    </div>

                    <div className="formDescriptionContainer">
                        <div className="descriptionContainerTitle">
                            <ContentPaste className='iconDescriptionNewProduct'/>
                            <h3 className='descriptionTitle'>Descripción Del Producto</h3>
                        </div>

                        <div className="formItemsDescription">
                        <label>Descripción</label>

                            <textarea placeholder='Escribe una descripción del producto' className='newProductNotes'></textarea>

                        </div>
                    </div>

                

                </form>

                <div className="rightContainer">
                <div className="previewTitleContainer">
                    <Visibility className='iconTitlePreview'/>
                    <h3 className='titlePreview'>Vista Previa Del Producto</h3>
                </div>

                <div className="imageContainer">
                    <label htmlFor="image" className='uploadButton'>
                        Subir Imagen
                    </label>

                    <input
                    id='image'
                    type="file"
                    accept='image/*' 
                    onChange={(e)=>{
                        const file = e.target.files?.[0];

                        if(file){
                            setImage(URL.createObjectURL(file))
                        }
                    }}
                    />
                    {
                        image && (
                            <img src={image} alt="vista previa" />
                        )
                    }
                </div>

                <form  className="previewForm">
                    <div className="previewItem">
                            <label className='labelPreview'> <Create className='iconPreview'/>    Nombre del Producto</label>
                            <input type="text" placeholder='No Especificado' className="inputPreview"/>
                        </div>

                        <div className="previewItem">
                            <label className='labelPreview'> <Category className='iconPreview'/>   Categoria</label>
                            <input type="text" placeholder='No Especificado' className="inputPreview"/>
                        </div>

                        <div className="previewItem">
                            <label className='labelPreview'> <AcUnit className='iconPreview'/> Estado</label>
                            <input type="text" placeholder='Pendiente' className="inputPreviewState"/>
                        </div>

                        <div className="previewItem">
                            <label className='labelPreview'> <AttachMoney className='iconPreview'/>  Precio Venta</label>
                            <input type="text" placeholder='0.0' className="inputPreviewPrice"/>
                        </div>

                        <div className="previewItem">
                            <label className='labelPreview'> <CardGiftcard className='iconPreview'/> Stock Disponible</label>
                            <input type="text" placeholder='0 Unidades' className="inputPreviewStock"/>
                        </div>

                        <div className="previewItem">
                            <label className='labelPreview'> <AccessTimeFilled className='iconPreview'/>   Marca</label>
                            <input type="text" placeholder='No Especificado' className="inputPreview"/>
                        </div>

                        <div className="previewItem">
                            <label className='labelPreview'> <LocalShipping className='iconPreview'/>  Proveedor</label>
                            <input type="text" placeholder='No Especificado' className="inputPreview"/>
                        </div>
                </form>
            </div>
            </div>
            
            <footer className='newProductBottom'>
                <div className="titleContainerBottom">  
                    <StarBorder className='titleIconBottom'/>
                    <h3 className='titleBottom'>Caracteristicas del Producto</h3>
                </div>

                <form className="formBottom">
                    <div className="caracterItem">
                            <label>Primera Caracteristica</label>
                            <input type="text" placeholder='Ej:Primera Cracteristica' className="newProductInput"/>
                        </div>

                        <div className="caracterItem">
                            <label>Segunda Caracteristica</label>
                            <input type="text" placeholder='Ej:Segunda Caracteristica' className="newProductInput"/>
                        </div>

                        <div className="caracterItem">
                            <label>Tercera Caracteristica</label>
                            <input type="text" placeholder='Ej:Tercera Caracteristica' className="newProductInput"/>
                        </div>

                        <div className="caracterItem">
                            <label>Cuarta Caracteristica</label>
                            <input type="text" placeholder='Ej:Cuarta Caracteristica' className="newProductInput"/>
                        </div>
                        <div className="caracterItem">
                            <label>quinta Caracteristica</label>
                            <input type="text" placeholder='Ej:quinta Caracteristica' className="newProductInput"/>
                        </div>

                        
                </form>
            </footer>
        </div>
    )

}