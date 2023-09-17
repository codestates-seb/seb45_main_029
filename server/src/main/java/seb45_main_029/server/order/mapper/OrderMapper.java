package seb45_main_029.server.order.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import seb45_main_029.server.order.dto.OrderPostDto;
import seb45_main_029.server.order.dto.OrderResponseDto;
import seb45_main_029.server.order.entity.Order;
import seb45_main_029.server.product.dto.ProductResponseDto;
import seb45_main_029.server.product.entity.Product;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface OrderMapper {


    Order orderPostDtoToOrder(OrderPostDto orderPostDto);

    List<OrderResponseDto> ordersToOrderReponseDtos(List<Order> orders);


     OrderResponseDto orderToOrderResponseDto(Order order);
    default List<ProductResponseDto> productToProductResponseDtos(List<Product> products) {
        if ( products == null ) {
            return null;
        }

        List<ProductResponseDto> list = new ArrayList<ProductResponseDto>( products.size() );
        for ( Product product : products ) {
            list.add( productToProductResponseDto( product ) );
        }

        return list;
    }
    default ProductResponseDto productToProductResponseDto(Product product) {
        if ( product == null ) {
            return null;
        }

        ProductResponseDto productResponseDto = new ProductResponseDto();

        productResponseDto.setProductId( product.getProductId() );
        productResponseDto.setProductName( product.getProductName() );
        productResponseDto.setPrice( product.getPrice() );

        return productResponseDto;
    }
}
