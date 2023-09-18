package seb45_main_029.server.image.controller;

import com.amazonaws.services.s3.AmazonS3Client;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import seb45_main_029.server.image.entity.Image;
import seb45_main_029.server.image.mapper.ImageMapper;
import seb45_main_029.server.image.service.ImageService;
import seb45_main_029.server.response.SingleResponseDto;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/upload")
@RestController
public class ImageController {

    private final ImageService imageService;
    private final ImageMapper imageMapper;


    @PostMapping("/profile")
    public ResponseEntity<List<String>> profileImageUpload(@RequestPart List<MultipartFile> multipartFile) throws Exception {
        return new ResponseEntity<>(imageService.upload(multipartFile, null), HttpStatus.OK);
    }

    @GetMapping("/{user-id}")
    public ResponseEntity findUserProfileImage(@PathVariable("user-id") long userId) {
        Image response = imageService.getUserProfileImage(userId);
        return new ResponseEntity<>(new SingleResponseDto<>(imageMapper.imageToImageResponseDto(response)), HttpStatus.OK);
    }

    @PostMapping("/product/{product-id}")
    public ResponseEntity<List<String>> productImageUpload(@PathVariable("product-id") Long productId,
                                                           @RequestPart List<MultipartFile> multipartFile) throws Exception {
        return new ResponseEntity<>(imageService.upload(multipartFile, productId), HttpStatus.OK);
    }
}
