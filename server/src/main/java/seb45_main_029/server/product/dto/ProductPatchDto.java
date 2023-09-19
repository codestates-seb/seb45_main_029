package seb45_main_029.server.product.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
public class ProductPatchDto {
    private long productId;
    private String productName;
    private String description;
    private int price;
    private int quantity;
    private String productImageUrl;
}
