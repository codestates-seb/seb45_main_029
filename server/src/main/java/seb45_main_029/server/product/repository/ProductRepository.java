package seb45_main_029.server.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.product.entity.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
}
