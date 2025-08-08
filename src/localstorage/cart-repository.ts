import { OrderDTO } from "../models/order";


export function save(cart: OrderDTO) {
    const str = JSON.stringify(cart);
    localStorage.setItem("com.devsuperior.tscommerce/Cart", str);
}

export function get() : OrderDTO {
    const str = localStorage.getItem("com.devsuperior.tscommerce/Cart") || '{"items"=[]}';
    return JSON.parse(str);
}