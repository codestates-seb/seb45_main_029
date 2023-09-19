package seb45_main_029.server.product.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.image.entity.Image;
import seb45_main_029.server.order.entity.Order;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Product extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long productId;

    @Column
    private String productName;

    @Column
    private String description;

    @Column
    private int price;

    @Column
    private int quantity;

    @Column
    private String productImageUrl;

    @Column
    private ProductStatus productStatus;

    @OneToMany(mappedBy = "product")
    private List<Image> images = new ArrayList<>();

    @OneToOne(mappedBy = "product")
    private Order order;

    @Column
    private boolean isDeleted = false;

    @Getter
    public enum ProductStatus {

        IN_STOCK("재고 있음"),
        OUT_OF_STOCK("품절");

        private String message;

        ProductStatus(String message) {
            this.message = message;
        }
    }
}
