package org.rewear.services;

import org.rewear.DataRepository.ProductRepository;
import org.rewear.dto.ProductDTO;
import org.rewear.models.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    ProductRepository productRepository;

    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public String setProduct(ProductDTO dto, MultipartFile image) {
        Path imagePath = null;
        try {
            String fileName = UUID.randomUUID() + "_" + image.getOriginalFilename();
            imagePath = Paths.get("uploads/" + fileName);
            Files.createDirectories(imagePath.getParent());
            Files.write(imagePath, image.getBytes());
        } catch (IOException e) {
            return "Error saving image";
        }

        Product product = new Product();
        product.setProductId(dto.productId);
        product.setName(dto.name);
        product.setDescription(dto.description);
        product.setSize(dto.size);
        product.setImagePath(imagePath.toString());
        product.setCondition(dto.condition);
        product.setCategory(dto.category);
        product.setExchangeType(dto.exchangeType);
        product.setPoints(dto.points);
        product.setOwnedBy(dto.ownedBy);

        productRepository.save(product);
        return "Product Created Successfully";
    }
}
