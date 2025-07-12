package org.rewear.controllers;

import org.rewear.models.Product;
import org.rewear.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auth/api")
@CrossOrigin(origins = "*")
public class AuthController {

    @Autowired
    ProductService productService;

    @GetMapping("/allProducts")
    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/product")
    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public String setProduct(@RequestBody Product product) {
        return productService.setProduct(product);
    }
}
