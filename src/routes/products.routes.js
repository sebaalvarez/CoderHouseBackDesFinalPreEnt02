import { Router } from "express";
import path from "path";
// import ProductManager from "../controller/productManager.js";
import ProductService from "../services/db/products.service.js";

const router = Router();
let products = [];
// const pm = new ProductManager(path.join(".", "files"));
const pm = new ProductService();

/***   Obtiene Todos los productos ***/
router.get("/", async (req, res) => {
  products = await pm.getProducts();
  let limit = req.query.limit;

  res.status(200).send({
    status: "Success",
    message: !limit ? products : products.slice(0, limit),
  });
});

/***   Obtiene producto por ID ***/
router.get("/:pid", async (req, res) => {
  let products = await pm.getProductById(req.params.pid);

  if (products.length === 0) {
    res.status(202).send({
      status: "info",
      error: `No se encontró el producto con ID: ${req.params.pid}`,
    });
  } else {
    res.status(200).send({ status: "Success", message: products });
  }
});

/***   Carga producto ***/
router.post("/", async (req, res) => {
  try {
    let user = req.body;
    await pm.addProduct(user);
    res.status(200).send({
      status: "Success",
      message: `Se cargo el producto Cod: ${user.code}`,
    });
  } catch (err) {
    res.status(400).send({ status: "Error", message: err });
  }
});

/*** Actualiza producto por ID ***/
router.put("/:pid", async (req, res) => {
  try {
    let user = req.body;
    let pid = req.params.pid;
    await pm.updateProductById(pid, user);
    res.status(200).send({
      status: "Success",
      message: `Se actualizó el producto Id: ${pid}`,
    });
  } catch (err) {
    res.status(400).send({ status: "Error", message: err });
  }
});

/***   Elimina producto por ID ***/
router.delete("/:pid", async (req, res) => {
  try {
    await pm.deleteProductoById(req.params.pid);
    res.status(200).send({
      status: "Success",
      message: `Se eliminó el producto ID: ${req.params.pid}`,
    });
  } catch (err) {
    res.status(400).send({ status: "Error", message: err });
  }
});

export default router;
