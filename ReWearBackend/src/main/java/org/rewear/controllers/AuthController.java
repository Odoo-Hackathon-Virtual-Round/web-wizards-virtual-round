package org.rewear.controllers;

import org.rewear.models.Product;
import org.rewear.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/auth/api")
public class AuthController {

    @Autowired
    ProductService productService;

    @GetMapping("/allProducts")
    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}
