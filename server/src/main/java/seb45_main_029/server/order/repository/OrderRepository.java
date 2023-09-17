package seb45_main_029.server.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.order.entity.Order;

public interface OrderRepository extends JpaRepository<Order,Long> {
}
