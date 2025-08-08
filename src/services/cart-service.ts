import { OrderDTO } from "../models/order";
import * as cartRepository from '../localstorage/cart-repository';
import { ProductDTO } from "../models/product";

export function saveCart(cart: OrderDTO) {
    cartRepository.save(cart);
}

export function getCart() : OrderDTO {
    return cartRepository.get();
}

export function addProduct(product: ProductDTO) {
    const cart = cartRepository.get();
    const item = cart.items.find(x => x.productId === product.id);
}