import { AppContext } from "@/context/StateContext";
import { useEffect } from "react";
import triangulo from "../../assets/Icons/triangulo.png";
import Image from "next/image";
import Modal from "./Modal/Modal";
import { useState } from "react";
import fondo from "./img/fondo.jpg";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Producto from "./Producto/Producto";

function Productos() {
  const {
    getProductos,
    postProducto,
    updateProducto,
    productos,
    isLoading,
    getCategories,
    categories,
  } = AppContext();
  useEffect(() => {
    getProductos();
  }, []);

  console.log(productos);

  const [addFormData, setAddFormData] = useState({
    name: "",
    artist: "",
    slug: "",
    details: "",
    detailsENG: "",
    description: "",
    descriptionENG: "",
    shipping: "",
    shippingENG: "",
    category: "",
    price: "",
    cantidad: 1,
    image: "",
    file: "",
  });

  const [selectedImages, setSelectedImages] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleImageChange = (event) => {
    const imageFiles = event.target.files;
    const selectedImages = Array.from(imageFiles).slice(0, 4); // Obtener hasta 4 imágenes
  
    setSelectedImages(selectedImages);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setSelectedFile(selectedFile);
  };

  const [quantity, setQuantity] = useState(0);

 

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const [productosFecha, setProductosFecha] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function compararPorCheckin(a, b) {
    const fechaCheckinA = new Date(a._creatredAt);
    const fechaCheckinB = new Date(b._createdAt);
    return fechaCheckinA - fechaCheckinB;
  }

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    addFormData.price = parseInt(addFormData.price)
    addFormData.cantidad = parseInt(addFormData.cantidad)

    // Obtener las referencias de las imágenes utilizando los IDs
    const imagesWithKeys = selectedImages.map((imageId,index) => {
      if (!imageId) {
        return null;
      }
    
      return {
        _key: `image_${index}`,
        asset: imageId,
      };
    });
    // Obtener la referencia del archivo utilizando el ID
    const fileWithKey = selectedFile
      ? {
          _key: 'selected_file',
          asset: selectedFile,
        }
      : null;
      console.log(imagesWithKeys)
  
    // Actualizar addFormData con las imágenes y el archivo con _key
    addFormData.image = imagesWithKeys;
    addFormData.file = selectedFile;
 
    console.log("esto es lo que vamos a mandar" +addFormData);
    
    try {
      const respuesta = await postProducto(addFormData);
      console.log("la respuesta fue", respuesta);

      getProductos();
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };



  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "category") {
      if (value === "new") {
        setShowNewCategoryInput(true);
        setAddFormData((prevData) => ({
          ...prevData,
          newCategory: '', // Resetear el valor del input de nueva categoría
        }));
      } else {
        setShowNewCategoryInput(false);
        setAddFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    } else {
      setAddFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    if (productos) {
      productos.sort(compararPorCheckin);
      setProductosFecha(productos);
    }
  }, [productos]);
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const generateSlug = () => {
    const newSlug = addFormData.name
      .toLowerCase()
      .replace(/\s+/g, "-") // Reemplaza espacios en blanco con guiones
      .replace(/[^a-z0-9-]/g, ""); // Elimina caracteres especiales
  
    setAddFormData((prevData) => ({
      ...prevData,
      slug: { current: newSlug },
    }));
  };

  const [currentPage, setCurrentPage] = useState(1);

  const productosPerPage = 4;
  const indexOfLastProducto = currentPage * productosPerPage;
  const indexOfFirstProducto = indexOfLastProducto - productosPerPage;

  const currentProductos = productosFecha?.slice(
    indexOfFirstProducto,
    indexOfLastProducto
  );

  return (
    <div className="h-full flex flex-row justify-center relative ">
      <Image
        src={fondo}
        alt="fondo img"
        className="absolute hidden lg:flex object-cover top-0 h-full w-full left-0 z-0"
      />
      <div className="h-full flex flex-col justify-center z-10">
        <div className="  flex flex-col lg:flex-row justify-between lg:mt-8">
          <h2 className="text-2xl lg:text-4xl  font-apollo tracking-[2px] mb-8 lg:text-white">
            Productos
          </h2>
          <div className="h-full flex flex-row gap-4">
            <div className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer flex flex-row items-center gap-2 bg-white">
              STATUS{" "}
              <Image
                src={triangulo}
                alt="triangulo icon"
                className="w-[9px] h-[7px] "
              />{" "}
            </div>
            <div
              className="border-[2px] rounded-[7px] px-4 py-2 h-[40px] font-Geometrica tracking-[1px] text-sm cursor-pointer bg-white"
              onClick={() => setShowModal(true)}
            >
              + AGREGAR{" "}
            </div>
          </div>
        </div>
        <div className="  grid grid-cols-1 md:grid-cols-2  mt-8 lg:mt-0 gap-4 lg:overflow-y-scroll 2xl:overflow-y-hidden">
          {console.log(productos)}
          {isLoading ? (
            <p>Cargando productos...</p>
          ) : currentProductos.length > 0 ? (
            currentProductos.map((producto, index) => (
              <Producto key={index} producto={producto} />
            ))
          ) : (
            <div className="w-[350px] h-[350px]">
              <span className="lg:text-white">No hay productos</span>
            </div>
          )}
        </div>
        <div className="flex flex-row justify-center gap-8 mt-8 mb-8">
          <button onClick={handlePrevPage}>
            <FaArrowLeft
              className={
                currentPage == 1
                  ? "hidden"
                  : "text-[#d3cbc0] lg:text-white text-3xl"
              }
            />
          </button>
          <button onClick={handleNextPage}>
            <FaArrowRight
              className={
                currentProductos.length < productosPerPage
                  ? "hidden"
                  : "text-[#d3cbc0] lg:text-white text-3xl "
              }
            />
          </button>
        </div>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} className="">
        <div className="p-6  ">
          <h2 className="text-xl mb-4">Agregar producto</h2>
          <div>
            <form
              className="flex flex-col h-full w-full"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 mt-2"
                placeholder="nombre"
                onChange={handleInputChange}
                value={addFormData.name}
                required
              />
              <input
                type="text"
                name="artist"
                id="artist"
                className="border-2 mt-2"
                placeholder="artist"
                onChange={handleInputChange}
                value={addFormData.artist}
                required
              />
              <div className="w-full flex flex-row items-center">

<input
  type="text"
  name="slug"
  id="slug"
  className="border-2 mt-2 w-[75%]"
  placeholder="slug"
  onChange={handleInputChange}
  value={addFormData.slug.current}
  required
/>
              <button
  type="button"
  className="bg-blue-500 text-white px-2 py-1 ml-2 rounded"
  onClick={generateSlug}
>
  Generar Slug
</button>
  </div>

              <textarea
                type="text"
                name="details"
                id="details"
                className="border-2 mt-2"
                placeholder="detalles"
                onChange={handleInputChange}
                value={addFormData.details}
                required
              />
              <textarea
                type="text"
                name="detailsENG"
                id="detailsENG"
                className="border-2 mt-2"
                placeholder="detallesENG"
                onChange={handleInputChange}
                value={addFormData.detailsENG}
                required
              />
              <textarea
                type="text"
                name="description"
                id="description"
                className="border-2 mt-2"
                placeholder="descripcion"
                onChange={handleInputChange}
                value={addFormData.description}
                required
              />
              <textarea
                type="text"
                name="descriptionENG"
                id="descriptionENG"
                className="border-2 mt-2"
                placeholder="descripcion ENG"
                onChange={handleInputChange}
                value={addFormData.descriptionENG}
                required
              />
              <textarea
                type="text"
                name="shipping"
                id="shipping"
                className="border-2 mt-2"
                placeholder="envio"
                onChange={handleInputChange}
                value={addFormData.shipping}
                required
              />
              <textarea
                type="text"
                name="shippingENG"
                id="shippingENG"
                className="border-2 mt-2"
                placeholder="envio ENG"
                onChange={handleInputChange}
                value={addFormData.shippingENG}
                required
              />
              <select
                name="category"
                id="category"
                className="border-2 mt-2"
                onChange={handleInputChange}
                value={addFormData.category}
                required
              >
                <option value="">Selecciona una categoría</option>
                {categories.map((category) => (
                  <option key={category._id} value={category._id}>
                    {category.title}
                  </option>
                ))}
                <option value="new">Agregar nueva categoría</option>
              </select>

              {showNewCategoryInput && (
                <input
                  type="text"
                  name="newCategory"
                  id="newCategory"
                  className="border-2 mt-2"
                  placeholder="Nueva categoría"
                  onChange={handleInputChange}
                  value={addFormData.newCategory}
                  required
                />
              )}
              <input
                type="number"
                name="price"
                id="price"
                className="border-2 mt-2"
                placeholder="precio"
                onChange={handleInputChange}
                value={addFormData.price}
                required
              />
              <div className="flex flex-col items-start space-x-4">
              <label htmlFor="cantidad" className="mt-2">
                Cantidad:
              </label>
                <input
                  className="w-16 px-3 py-1 border rounded text-center"
                  type="number"
                  name="cantidad"
                id="cantidad"
                value={addFormData.cantidad} // Asumiendo que 'addFormData' contiene el estado actual
                onChange={handleInputChange}
                
                />
              </div>

              <label htmlFor="image" className="mt-2">
                Imagen:
              </label>
              <input
                type="file"
                accept="image/*"
                name="image"
                id="image"
                className="border-2 mt-1"
                onChange={handleImageChange}
                multiple
                // Puedes omitir el value en un campo de archivo
              />

              <label htmlFor="file" className="mt-2">
                Archivo:
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="border-2 mt-1"
                onChange={handleFileChange}
                multiple
                // Puedes omitir el value en un campo de archivo
              />
            </form>
          </div>
          <div className="flex flex-row justify-between">
            <button
              className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Guardar
            </button>
            <button
              className="mt-4 bg-[#d3cbc0] hover:bg-[#4a443c] text-white font-bold py-2 px-4 rounded"
              onClick={handleCloseModal}
            >
              Cancelar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Productos;
