package seb45_main_029.server.product.cotroller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.product.dto.ProductPatchDto;
import seb45_main_029.server.product.dto.ProductPostDto;
import seb45_main_029.server.product.entity.Product;
import seb45_main_029.server.product.mapper.ProductMapper;
import seb45_main_029.server.product.service.ProductService;
import seb45_main_029.server.response.MultiResponseDto;
import seb45_main_029.server.response.SingleResponseDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/product")
@RestController
public class ProductController {

    private final ProductService productService;
    private final ProductMapper productMapper;

    @PostMapping
    public ResponseEntity register(@RequestBody ProductPostDto productPostDto) {
        Product product = productMapper.productPostDtoToProduct(productPostDto);
        Product response = productService.registerProduct(product);

        return new ResponseEntity<>(new SingleResponseDto<>(productMapper.productToProductResponseDto(response)), HttpStatus.CREATED);
    }

    @PatchMapping("/{product-id}")
    public ResponseEntity modify(@PathVariable("product-id") long productId,
                                 @RequestBody ProductPatchDto productPatchDto) {

        productPatchDto.setProductId(productId);
        Product product = productMapper.productPatchDtoToProduct(productPatchDto);
        Product response = productService.updateProduct(product);

        return new ResponseEntity<>(new SingleResponseDto<>(productMapper.productToProductResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping("/{product-id}")
    public ResponseEntity getProduct(@PathVariable("product-id") long productId) {

        Product response = productService.getProduct(productId);
        return new ResponseEntity<>(new SingleResponseDto<>(productMapper.productToProductResponseDto(response)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getProducts(@RequestParam int page,
                                      @RequestParam int size) {

        Page<Product> productPage = productService.getProducts(page - 1, size);
        List<Product> response = productPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(productMapper.productToProductResponseDtos(response), productPage), HttpStatus.OK);
    }

    @DeleteMapping("/{product-id}")
    public ResponseEntity deleteProduct(@PathVariable("product-id") long productId) {
        productService.deleteProduct(productId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
