package seb45_main_029.server.image.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.image.dto.ImageDto;
import seb45_main_029.server.image.entity.Image;

@Mapper(componentModel = "spring")
public interface ImageMapper {
    ImageDto imageToImageResponseDto(Image image);
}
