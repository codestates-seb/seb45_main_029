package seb45_main_029.server.video.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.security.auth.utils.AuthUserUtils;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.repository.UserRepository;
import seb45_main_029.server.user.service.UserService;
import seb45_main_029.server.video.entity.Bookmark;
import seb45_main_029.server.video.entity.Video;
import seb45_main_029.server.video.repository.BookmarkRepository;
import seb45_main_029.server.video.repository.VideoRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
public class VideoService {

    private final VideoRepository videoRepository;
    private final UserRepository userRepository;
    private final UserService userService;
    private final BookmarkRepository bookmarkRepository;

    public Video getVideo(long videoId) {
        Video findVideo = findVideo(videoId);

        findVideo.setViewCount(findVideo.getViewCount() + 1);
        videoRepository.save(findVideo);

        return findVideo;
    }

    //            부위별 운동영상 리스트 조회
    @Transactional(readOnly = true)
    public Page<Video> getPartVideos(int page, int size, PainArea painArea) {
//        부위와 동일한 태그를 가진 동영상을 가져옴

        return videoRepository.findByPainArea(PageRequest.of(page, size), painArea);

    }


    //        직업별 운동영상 리스트 조회
    @Transactional(readOnly = true)
    public Page<Video> getJobVideos(int page, int size) {

        User getLoginUser = userService.getLoginUser();
        Job job = getLoginUser.getJob();

        Job jobType = null;

        if (job.getJobType().equals("사무직")) {
            jobType = Job.사무직;
            return videoRepository.findByJob(PageRequest.of(page, size), jobType);

        } else if (job.getJobType().equals("현장직")) {
            jobType = Job.현장직;
            return videoRepository.findByJob(PageRequest.of(page, size), jobType);

        } else return videoRepository.findAll(PageRequest.of(page, size));

    }

    //        맞춤 운동 영상 조회
    @Transactional(readOnly = true)
    public Page<Video> getRecommendedVideos(int page, int size) {

        User getLoginUser = userService.getLoginUser();

        PainArea painArea = getLoginUser.getPainArea();


        return videoRepository.findByPainArea(PageRequest.of(page, size), painArea);

    }

    //    인기 동영상 조회
    @Transactional(readOnly = true)
    public Page<Video> getPopularVideos(int page, int size) {

        return videoRepository.findAll(PageRequest.of(page, size, Sort.by("bookmarkCount").descending()));
    }

    //    키워드로 동영상 검색
    @Transactional(readOnly = true)
    public Page<Video> getKeywordSearch(int page, int size, String keyword) {

        return videoRepository.findByTitleContaining(PageRequest.of(page, size), keyword);
    }

    //
    public Video findVideo(long videoId) {
        Video findVideo = videoRepository.findById(videoId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.VIDEO_NOT_FOUND));

        return findVideo;
    }


    @Transactional
    public Bookmark bookmark(long videoId) {
//        사용자가 북마크 버튼을 누르면 로그인한 정보를 기반으로 멤버의 북마크 필드에 리스트 형식으로 해당 동영상의 videoId 를 넣어주는 방식을 생각함
        User loginUser = userService.getLoginUser();
        Video findVideo = findVideo(videoId);

        Bookmark bookmark = new Bookmark();
        bookmark.setVideo(findVideo);
        bookmark.setUser(loginUser);
        bookmarkRepository.save(bookmark);


        findVideo.setBookmarkCount(findVideo.getBookmarkCount() + 1);

        videoRepository.save(findVideo);
        return bookmark;

    }

    // 북마크 조회
    @Transactional(readOnly = true)
    public Page<Bookmark> getBookmark(int page, int size) {
        long loginUserId = userService.getLoginUser().getUserId();

        return bookmarkRepository.findByUserUserId(PageRequest.of(page, size), loginUserId);
    }

    // 북마크 삭제
    @Transactional
    public Bookmark removeBookmark(long videoId) {

        User loginUser = userService.getLoginUser();
        Video findVideo = findVideo(videoId);

        Bookmark findBookmark = bookmarkRepository.findByUserAndVideo(loginUser, findVideo);
        if (findBookmark != null) {
            bookmarkRepository.delete(findBookmark);

            findVideo.setBookmarkCount(findVideo.getBookmarkCount() - 1);

            videoRepository.save(findVideo);
        } else {
            throw new BusinessLogicException(ExceptionCode.BOOKMARK_VIDEO_NOT_FOUND);
        }
        return findBookmark;

    }

//    public String getLoginUserPrincipal() {
//        Authentication authentication = AuthUserUtils.getAuthUser();
//        Object principal = authentication.getPrincipal();
//        String email = (String) principal;
//        return email;
//    }
}
