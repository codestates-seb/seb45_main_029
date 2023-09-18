package seb45_main_029.server.image.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.product.entity.Product;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Image extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long imageId;

    @Column
    private String originalName;

    @Column
    private String imageName;

    @Column
    private String imagePath;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;
}
