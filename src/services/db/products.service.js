import productsModel from "./models/products.js";

export default class StudentService {
  constructor() {
    // console.log("Working products with Database persistence in mongodb");
  }

  addProduct = async (product) => {
    try {
      let result = await productsModel.create(product);
      console.log(`Se cargo el producto ${product.code}`);
      return result;
    } catch (err) {
      console.error(`ERROR agregando Productos: ${err}`);
      return [];
    }
  };

  getProducts = async () => {
    try {
      let courses = await productsModel.find();
      return courses.map((course) => course.toObject());
    } catch (err) {
      console.error(`ERROR obteniendo Productos: ${err}`);
      return [];
    }
  };

  getProductById = async (id) => {
    try {
      let courses = await productsModel.findOne({ _id: id });
      // return courses.map((course) => course.toObject());
      return courses;
    } catch (err) {
      console.error(`ERROR obteniendo Producto por ID: ${err}`);
      return [];
    }
  };

  updateProductById = async (id, product) => {
    try {
      let result = await productsModel.updateOne(
        { _id: id },
        { $set: { title: "ACTUALIZADO" } }
      );
      console.log(`Se cargo el producto ${result}`);

      console.log(`El producto id: ${id} fue actualizado correctamente`);
      return result;
    } catch (err) {
      console.error(`ERROR actualizando Producto: ${err}`);
    }
  };

  deleteProductoById = async (id) => {
    let msg = "";
    try {
      let result = await productsModel.deleteOne({ _id: id });
      console.log(`Se cargo el producto ${result}`);
    } catch (err) {
      msg = `ERROR borrando Producto por ID: ${err}`;
    } finally {
      console.log(msg);
    }
  };
}