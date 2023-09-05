package seb45_main_029.server.video.mapper;

import org.mapstruct.Mapper;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.video.dto.BookmarkResponseDto;

@Mapper(componentModel = "spring")
public interface BookmarkMapper {
    BookmarkResponseDto bookmarkToBookmarkResponseDto(User user);
}
