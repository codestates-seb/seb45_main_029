package seb45_main_029.server.product.mapper;

import org.mapstruct.Mapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import seb45_main_029.server.product.dto.ProductPatchDto;
import seb45_main_029.server.product.dto.ProductPostDto;
import seb45_main_029.server.product.dto.ProductResponseDto;
import seb45_main_029.server.product.entity.Product;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productPostDtoToProduct(ProductPostDto productPostDto);

    Product productPatchDtoToProduct(ProductPatchDto productPatchDto);

    ProductResponseDto productToProductResponseDto(Product product);

    List<ProductResponseDto> productToProductResponseDtos(List<Product> products);
}
