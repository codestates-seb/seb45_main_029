package seb45_main_029.server.product.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.product.entity.Product;

import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Setter
public class ProductResponseDto {
    private long productId;
    private String productName;
    private String description;
    private int price;
    private int quantity;
    private String productImageUrl;
    private Product.ProductStatus productStatus;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;
}
