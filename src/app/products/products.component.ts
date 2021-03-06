import { ProductService } from './product.service';
import { Component } from '@angular/core';

/**
 * Products
 */
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    providers: [ProductService]
})
export class ProductComponent {
    title = 'hero';
    products;
    imgUrl = 'assets/buddha.png';

    /**
     * use dependency injection
     * @param productService
     */
    constructor(productService: ProductService) {
        this.products = productService.getProducts();
    }

    /**
     * make log
     */
    logMaker() {
        console.log('It is some log');
    }
}
