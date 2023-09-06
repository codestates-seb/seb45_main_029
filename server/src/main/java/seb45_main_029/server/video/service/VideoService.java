package seb45_main_029.server.video.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.security.auth.utils.AuthUserUtils;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.repository.UserRepository;
import seb45_main_029.server.user.service.UserService;
import seb45_main_029.server.video.entity.Video;
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

    //            부위별 운동영상 리스트 조회
    @Transactional(readOnly = true)
    public Page<Video> getPartVideos(int page, int size, Video.BodyPart part) {
//        부위와 동일한 태그를 가진 동영상을 가져옴

        return videoRepository.findByBodyPart(PageRequest.of(page, size), part);

    }


    //        직업별 운동영상 리스트 조회
    @Transactional(readOnly = true)
    public Page<Video> getJobVideos(int page, int size) {
        String loginUserEmail = getLoginUserPrincipal();

        User findUser = userRepository.findByEmail(loginUserEmail).orElseThrow(() -> new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        String job = findUser.getJob();

        return videoRepository.findByTitleContaining(PageRequest.of(page, size), job);

    }

    //        맞춤 운동 영상 조회
    @Transactional(readOnly = true)
    public Page<Video> getRecommendedVideos(int page, int size) {
        User getLoginUser = userService.getLoginUser();
        String userStatus = getLoginUser.getStatus();


        return videoRepository.findByTitleContaining(PageRequest.of(page, size), userStatus);

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

    public User bookmark(long videoId) {
//        사용자가 북마크 버튼을 누르면 로그인한 정보를 기반으로 멤버의 북마크 필드에 리스트 형식으로 해당 동영상의 videoId 를 넣어주는 방식을 생각함
        User loginUser = userService.getLoginUser();

        List<Long> userBookmarkingList = loginUser.getBookmark();

        if (!userBookmarkingList.contains(videoId)) {
            userBookmarkingList.add(videoId);
            userRepository.save(loginUser);

            Video bookmarkedVideo = findVideo(videoId);
            bookmarkedVideo.setBookmarkCount(bookmarkedVideo.getBookmarkCount() + 1);
            videoRepository.save(bookmarkedVideo);
        }
        return loginUser;
    }

    public User removeBookmark(long videoId) {
        User loginUser = userService.getLoginUser();

        List<Long> userBookmarkingList = loginUser.getBookmark();

        if (userBookmarkingList.contains(videoId)) {
            userBookmarkingList.remove(videoId);
            userRepository.save(loginUser);

            Video bookmarkedVideo = findVideo(videoId);
            bookmarkedVideo.setBookmarkCount(bookmarkedVideo.getBookmarkCount() - 1);
            videoRepository.save(bookmarkedVideo);
        }
        return loginUser;
    }

    public String getLoginUserPrincipal() {
        Authentication authentication = AuthUserUtils.getAuthUser();
        Object principal = authentication.getPrincipal();
        String email = (String) principal;
        return email;
    }
}
