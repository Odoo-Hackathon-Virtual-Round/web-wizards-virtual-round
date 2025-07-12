package org.rewear.dto;

import lombok.*;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProductDTO {
    public String productId;
    public String name;
    public String description;
    public String size;
    public String condition;
    public String category;
    public String exchangeType;
    public Long points;
    public String ownedBy;
}

