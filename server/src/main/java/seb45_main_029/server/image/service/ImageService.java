package seb45_main_029.server.image.service;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import seb45_main_029.server.image.entity.Image;
import seb45_main_029.server.image.repository.ImageRepository;

import java.io.File;
import java.io.IOException;
import java.util.UUID;

@RequiredArgsConstructor
@Service
public class ImageService {

    private final ImageRepository imageRepository;

    @Value("${upload.image.path}")
    private String imagePath;

    public String upload(MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            throw new IllegalArgumentException("Image file is empty");
        }
        File uploadDir = new File(imagePath);
        if (!uploadDir.exists()) {
            uploadDir.mkdirs();
        }


        String originalName = file.getOriginalFilename();
        String fileName = UUID.randomUUID() + "_" + originalName;

        File save = new File(uploadDir, fileName);
        file.transferTo(save);

        Image image = new Image();
        image.setImageName(fileName);
        image.setOriginalName(originalName);
        image.setImagePath("/images/" + fileName);
        imageRepository.save(image);

        return "/images/" + fileName;
    }
}
