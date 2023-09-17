package seb45_main_029.server.order.dto;

import lombok.Getter;
import lombok.Setter;
import seb45_main_029.server.order.entity.Order;
import seb45_main_029.server.product.dto.ProductResponseDto;
import seb45_main_029.server.product.entity.Product;

import java.util.List;

@Getter
@Setter
public class OrderResponseDto {

    private long orderId;
    private long userId;
    private Product product;
    private Order.OrderStatus orderStatus;

}
