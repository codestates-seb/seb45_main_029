package seb45_main_029.server.video.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.video.entity.Bookmark;
import seb45_main_029.server.video.entity.Video;

import java.util.List;
import java.util.Optional;

public interface BookmarkRepository extends JpaRepository<Bookmark, Long> {
    Bookmark findByUserAndVideo(User user, Video video);

    @Query("select b from Bookmark b where b.user.userId = :userId and b.video.job =:job")
    Page<Bookmark> jobTypeBookmark(PageRequest pageRequest, @Param("job") Job job, @Param("userId") long userId);

    @Query("select b from Bookmark b where b.user.userId = :userId and b.video.painArea=:painArea")
    Page<Bookmark> painAreaTypeBookmark(PageRequest pageRequest, @Param("painArea") PainArea painArea, @Param("userId") long userId);

    @Query("select b from Bookmark b where b.user.userId = :userId")
    Page<Bookmark> bookmarkAll(PageRequest pageRequest, @Param("userId") long userId);

    @Query("select b from Bookmark b where b.user.userId = :userId and b.video.job = null ")
    Page<Bookmark> bookmarkPainAreaNull(PageRequest pageRequest, @Param("userId") long userId);

    Page<Bookmark> findByUserUserId(PageRequest pageRequest, long userId);

    Bookmark findByUserUserId(long userId);

    int countByUserUserId(long userId);

}
