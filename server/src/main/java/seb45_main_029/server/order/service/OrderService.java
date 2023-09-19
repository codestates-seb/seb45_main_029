package seb45_main_029.server.order.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.order.entity.Order;
import seb45_main_029.server.order.repository.OrderRepository;
import seb45_main_029.server.point.entity.Point;
import seb45_main_029.server.point.repository.PointRepository;
import seb45_main_029.server.product.entity.Product;
import seb45_main_029.server.product.repository.ProductRepository;
import seb45_main_029.server.product.service.ProductService;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.service.UserService;

@RequiredArgsConstructor
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final UserService userService;
    private final PointRepository pointRepository;
    private final ProductRepository productRepository;
    private final ProductService productService;

    public Order createOrder(Order order, long productId) {

        User loginUser = userService.getLoginUser();
        order.setUserId(loginUser.getUserId());

        order.setOrderStatus(Order.OrderStatus.ORDER_REQUEST);
        Product findProduct = productService.findProduct(productId);
        order.setProduct(findProduct);

        Point point = loginUser.getPoint();

        point.setPoint(point.getPoint() - findProduct.getPrice());

        if (point.getPoint() < 0)
            throw new BusinessLogicException(ExceptionCode.NOT_ENOUGH_POINTS);
        else {

            if (findProduct.getQuantity() > 0) {

                findProduct.setQuantity(findProduct.getQuantity() - 1);

                productRepository.save(findProduct);
                pointRepository.save(point);
//            }else throw new BusinessLogicException(ExceptionCode.)
            }
            return orderRepository.save(order);
        }
    }
}
