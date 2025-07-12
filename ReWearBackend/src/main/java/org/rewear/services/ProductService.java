package org.rewear.services;

import org.rewear.dto.ProductDTO;
import org.rewear.models.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();

    String setProduct(ProductDTO product, MultipartFile image);
}
