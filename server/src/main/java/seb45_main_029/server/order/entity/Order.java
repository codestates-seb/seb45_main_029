package seb45_main_029.server.order.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.product.entity.Product;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity(name = "ORDERS")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long orderId;

    @Column
    private long userId;

    @Column
    private OrderStatus orderStatus;

    @OneToOne
    @JoinColumn(name = "productId")
    private Product product;

    public enum OrderStatus{
        ORDER_REQUEST("주문 요청"),
        ORDER_COMPLETE("주문 완료"),
        PENDING_SHIPMENT("배송 대기중"),
        SHIPPED("발송됨"),
        ORDER_CANCEL("주문 취소");

        @Getter
        public String orderMessage;

        OrderStatus(String orderMessage) {
            this.orderMessage = orderMessage;
        }
    }
}
