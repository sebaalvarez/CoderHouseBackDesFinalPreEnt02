import { Router } from "express";
import CartService from "../services/db/carts.service.js";
import ProductService from "../services/db/products.service.js";

const cartService = new CartService();
const productService = new ProductService();

const router = Router();

// router.get("/", async (req, res) => {
//   let products = await productService.getProducts();
//   console.log(products);
//   res.render("students", { products: products });
// });

/***  Obtiene Todos los productos y los muestra por navegador  ***/
router.get("/products", async (req, res) => {
  let products = await productService.getProducts();

  res.render("home", { products });
});

// router.get("/carts", async (req, res) => {
//   let carts = await cartService.getAll();
//   console.log(carts);
//   res.render("courses", { carts });
// });

export default router;
