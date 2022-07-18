const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/products", ProductController.createProduct);
    app.get("/api/products", ProductController.allProducts);
    app.get("api/products/:id", ProductController.oneProduct);
    app.put("api/products/:id", ProductController.editProduct);
    app.delete("api/products/:id", ProductController.removeProduct);

}