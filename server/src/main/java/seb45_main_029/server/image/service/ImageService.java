package seb45_main_029.server.image.service;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.CannedAccessControlList;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.PutObjectRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;
import seb45_main_029.server.image.entity.Image;
import seb45_main_029.server.image.repository.ImageRepository;
import seb45_main_029.server.product.entity.Product;
import seb45_main_029.server.product.service.ProductService;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.service.UserService;

import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Service
public class ImageService {

    @Autowired
    private AmazonS3 amazonS3;

    private final ImageRepository imageRepository;
    private final ProductService productService;
    private final UserService userService;

    public ImageService(ImageRepository imageRepository, ProductService productService, UserService userService) {
        this.imageRepository = imageRepository;
        this.productService = productService;
        this.userService = userService;
    }

    @Value("${cloud.aws.s3.bucket}")
    private String bucket;

    public List<String> upload(List<MultipartFile> multipartFiles, Long productId) throws IOException {

        List<String> fileNameList = new ArrayList<>();
        String dirName = "";
        if (productId == null) {
            dirName = "profileImage/";
        } else {
            dirName = "productImage/";
        }
        for (MultipartFile file : multipartFiles) {

            String fileName = createFileName(dirName + file.getOriginalFilename());
            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(file.getSize());
            metadata.setContentType(file.getContentType());

            try (InputStream inputStream = file.getInputStream()) {
                amazonS3.putObject(new PutObjectRequest(bucket, fileName, inputStream, metadata)
                        .withCannedAcl(CannedAccessControlList.PublicRead));
            } catch (IOException e) {
                throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
            }
            String bucketUrl = amazonS3.getUrl(bucket, fileName).toString();
            Image image = new Image();
            image.setOriginalName(file.getOriginalFilename());
            image.setImageName(fileName);
            image.setImageUrl(bucketUrl);
            if (productId == null) {
                User user = userService.getLoginUser();
                image.setUser(user);
                user.setImage(image);
            }
            if (productId != null) {
                Product product = productService.findProduct(productId);
                image.setProduct(product);
                List<Image> images = new ArrayList<>();
                images.add(image);
                product.setImages(images);
            }
            imageRepository.save(image);
            fileNameList.add(fileName);

        }

        return fileNameList;
    }

    public Image getUserProfileImage(long userId) {
        Image findImage = imageRepository.findImageByUserUserId(userId);
        return findImage;
    }

    public void deleteImage(String fieName) {
        amazonS3.deleteObject(new DeleteObjectRequest(bucket, fieName));
    }

    public String createFileName(String fileName) {
        return UUID.randomUUID().toString().concat(getFileExtension(fileName));
    }

    public String getFileExtension(String fileName) {
        try {
            return fileName.substring(fileName.lastIndexOf("."));
        } catch (StringIndexOutOfBoundsException e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
