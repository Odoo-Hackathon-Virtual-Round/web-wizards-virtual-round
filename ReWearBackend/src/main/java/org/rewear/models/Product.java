package org.rewear.models;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.TypeAlias;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Document("products")
@TypeAlias("product")
public class Product {
    @Id
    String productId;
    String name;
    String description;
    String size;
    String image;
    String condition;
    String category;
    String exchangeType;
    Long points;
    String ownedBy;
}
