package seb45_main_029.server.video.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.video.dto.VideoResponseDto;
import seb45_main_029.server.video.entity.Video;

import java.util.List;

@Mapper(componentModel = "spring")
public interface VideoMapper {

    VideoResponseDto videoToVideoResponseDto(Video video);

    List<VideoResponseDto> videosToVideoResponseDtos(List<Video> videos);
}
