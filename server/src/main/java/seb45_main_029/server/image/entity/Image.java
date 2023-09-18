package seb45_main_029.server.image.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.product.entity.Product;
import seb45_main_029.server.user.entity.User;

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
    private String imageName;

    @Column
    private String originalName;

    @Column
    private String imageUrl;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Image(String originalName,String imageName, String imageUrl) {
        this.originalName = originalName;
        this.imageName = imageName;
        this.imageUrl = imageUrl;
    }
}
