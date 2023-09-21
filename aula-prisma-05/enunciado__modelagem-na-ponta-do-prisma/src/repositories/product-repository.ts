import prisma from "database/database";
import { Product } from "@prisma/client";

export type createProduct = Omit<Product, "id">;

async function getProducts() {
  const products = await prisma.product.findMany();
  return products;
}

async function getProduct(id: number) {
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  return product;
}

async function createProduct(product: createProduct) {
  return prisma.product.create({
    data: product,
  });
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct,
};

export default productRepository;
