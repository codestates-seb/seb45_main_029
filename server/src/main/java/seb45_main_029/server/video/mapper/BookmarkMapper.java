package seb45_main_029.server.video.mapper;

import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.video.dto.BookmarkResponseDto;
import seb45_main_029.server.video.entity.Bookmark;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")
public interface BookmarkMapper {
    default BookmarkResponseDto bookmarkToBookmarkResponseDto(Bookmark bookmark) {

        if (bookmark == null) {
            return null;
        }

        BookmarkResponseDto bookmarkResponseDto = new BookmarkResponseDto();

        bookmarkResponseDto.setUserId(bookmark.getUser().getUserId());
        bookmarkResponseDto.setUsername(bookmark.getUser().getUsername());
        bookmarkResponseDto.setVideoId(bookmark.getVideo().getVideoId());
        bookmarkResponseDto.setTitle(bookmark.getVideo().getTitle());
        bookmarkResponseDto.setYoutubeLink(bookmark.getVideo().getYoutubeLink());
        bookmarkResponseDto.setBookmarkId(bookmark.getBookmarkId());
        bookmarkResponseDto.setJob(bookmark.getVideo().getJob());
        bookmarkResponseDto.setPainArea(bookmark.getVideo().getPainArea());
        bookmarkResponseDto.setThumbnail(bookmark.getVideo().getThumbnail());

        return bookmarkResponseDto;

    }

    List<BookmarkResponseDto> bookmarkToBookmarkResponseDtos(List<Bookmark> bookmarks);
}
