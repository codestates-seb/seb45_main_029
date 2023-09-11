package seb45_main_029.server.video.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.video.entity.Bookmark;
import seb45_main_029.server.video.entity.Video;

import java.util.List;
import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    Bookmark findByUserAndVideo(User user, Video video);

    Page<Bookmark> findByUserUserId(PageRequest pageRequest, long userId);

    Bookmark findByUserUserId(long userId);

    int countByUserUserId(long userId);

}
