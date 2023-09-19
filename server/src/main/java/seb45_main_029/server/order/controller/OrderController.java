package seb45_main_029.server.order.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.order.dto.OrderPostDto;
import seb45_main_029.server.order.entity.Order;
import seb45_main_029.server.order.mapper.OrderMapper;
import seb45_main_029.server.order.service.OrderService;

@RequiredArgsConstructor
@RequestMapping("/order")
@RestController
public class OrderController {

    private final OrderService orderService;
    private final OrderMapper orderMapper;

    @PostMapping("/{product-id}")
    public ResponseEntity order(@PathVariable("product-id") long productId,
            @RequestBody OrderPostDto orderPostDto) {

        Order order = orderMapper.orderPostDtoToOrder(orderPostDto);
        Order response = orderService.createOrder(order,productId);

        return new ResponseEntity<>(orderMapper.orderToOrderResponseDto(response), HttpStatus.OK);

    }
}
