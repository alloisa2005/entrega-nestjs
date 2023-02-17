import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async addProduct(product: CreateProductDto) {
    const newProduct = await this.productModel.create(product);
    return newProduct;
  }

  getProducts() {
    return this.productModel.find();
  }

  getProduct(id: string) {
    return this.productModel.findById(id);
  }

  async updateProduct(id: string, updateProductDto: UpdateProductDto) {
    const prod = await this.productModel.findById(id);
    if (!prod)
      return { status: 'ERROR', message: `Product ID ${id} no existe` };

    const updatedProd = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      { new: true },
    );
    return updatedProd;
  }

  async deleteProduct(id: string) {
    const prod = await this.productModel.findById(id);
    if (!prod)
      return { status: 'ERROR', message: `Product ID ${id} no existe` };

    return await this.productModel.findByIdAndDelete(id);
  }
}
