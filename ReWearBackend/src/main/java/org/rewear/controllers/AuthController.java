package org.rewear.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.rewear.dto.ProductDTO;
import org.rewear.models.JWTRequest;
import org.rewear.models.Product;
import org.rewear.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

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

    @PostMapping(value = "/product", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public ResponseEntity<String> setProduct(
            @RequestPart("image") MultipartFile image,
            @RequestPart("product") String product
    ) {
        ObjectMapper objectMapper = new ObjectMapper();

        try {
            ProductDTO productdto = objectMapper.readValue(product, ProductDTO.class);
            productService.setProduct(productdto, image);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return ResponseEntity.ok("Product Created Successfully");
    }
}
