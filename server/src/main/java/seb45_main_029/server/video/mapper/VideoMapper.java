package seb45_main_029.server.video.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.video.dto.VideoResponseDto;
import seb45_main_029.server.video.entity.Video;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface VideoMapper {

    VideoResponseDto videoToVideoResponseDto(Video video);

    default List<VideoResponseDto> videosToVideoResponseDtos(List<Video> videos) {

        if (videos == null) {
            return null;
        }

        List<VideoResponseDto> list = new ArrayList<VideoResponseDto>(videos.size());
        for (Video video : videos) {
            VideoResponseDto videoResponseDto = new VideoResponseDto();
            videoResponseDto.setCreatedAt(video.getCreatedAt());
            videoResponseDto.setModifiedAt(video.getModifiedAt());
            videoResponseDto.setVideoId(video.getVideoId());
            videoResponseDto.setYoutubeLink(video.getYoutubeLink());
            videoResponseDto.setTitle(video.getTitle());
            videoResponseDto.setThumbnail(video.getThumbnail());
            videoResponseDto.setDescription(video.getDescription());
            videoResponseDto.setBookmarkCount(video.getBookmarkCount());
            videoResponseDto.setViewCount(video.getViewCount());
            videoResponseDto.setJob(video.getJob());
            videoResponseDto.setPainArea(video.getPainArea());
            list.add(videoResponseDto);
        }
        return list;
    }
}


