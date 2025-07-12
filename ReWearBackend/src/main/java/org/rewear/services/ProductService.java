package org.rewear.services;

import org.rewear.models.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    String setProduct(Product product);
}
