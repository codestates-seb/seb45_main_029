package seb45_main_029.server.product.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProductPostDto {

    private String productName;
    private String description;
    private int price;
    private int quantity;
    private String productImageUrl;

}
