package seb45_main_029.server.order.dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class OrderPostDto {

    private long productId;
    private String shippingAddress;

}
