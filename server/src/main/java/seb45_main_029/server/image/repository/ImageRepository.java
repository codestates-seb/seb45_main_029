package seb45_main_029.server.image.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.image.entity.Image;

public interface ImageRepository extends JpaRepository<Image,Long> {
}
