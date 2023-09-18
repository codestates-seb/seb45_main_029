package seb45_main_029.server.image.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import seb45_main_029.server.image.service.ImageService;

import java.io.IOException;

@RequiredArgsConstructor
@RequestMapping("/image")
@RestController
public class ImageController {

    private final ImageService imageService;

    @PostMapping
    public ResponseEntity<String> upload(@RequestPart(value = "file") MultipartFile multipartFile) throws Exception {
        try {
            String imageUrl = imageService.upload(multipartFile);
            return ResponseEntity.ok(imageUrl);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Image upload failed");
        }
    }

    @PostMapping("/upload")
    public ResponseEntity<String> upload2(@RequestPart(value = "file") MultipartFile multipartFile) throws Exception {
        return null;
    }
}
