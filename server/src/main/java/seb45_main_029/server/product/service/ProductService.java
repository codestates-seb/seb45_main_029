package seb45_main_029.server.product.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.product.entity.Product;
import seb45_main_029.server.product.repository.ProductRepository;

import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ProductService {

    private final ProductRepository productRepository;

    public Product registerProduct(Product product) {

        product.setProductStatus(Product.ProductStatus.IN_STOCK);

        return productRepository.save(product);
    }

    public Product updateProduct(Product product) {

        Product findProduct = findProduct(product.getProductId());

        Optional.ofNullable(product.getProductName()).ifPresent(productName -> findProduct.setProductName(productName));
        Optional.ofNullable(product.getDescription()).ifPresent(description -> findProduct.setDescription(description));
        Optional.of(product.getPrice()).ifPresent(price -> findProduct.setPrice(price));
        Optional.of(product.getQuantity()).ifPresent(quantity -> findProduct.setQuantity(quantity));
        Optional.ofNullable(product.getProductImageUrl()).ifPresent(url -> findProduct.setProductImageUrl(url));
        Optional.ofNullable(product.getModifiedAt()).ifPresent(localDateTime -> findProduct.setModifiedAt(localDateTime));

        return productRepository.save(findProduct);
    }

    public Product getProduct(long productId) {
        return findProduct(productId);
    }

    public Page<Product> getProducts(int page, int size) {
        PageRequest pageRequest = PageRequest.of(page, size);
        return productRepository.findAll(pageRequest);
    }

    public Product findProduct(long productId) {
        Product findProduct = productRepository.findById(productId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND));
        return findProduct;
    }

    public void deleteProduct(long productId){
        Product findProduct = findProduct(productId);
        findProduct.setDeleted(true);

        productRepository.save(findProduct);
    }
}
