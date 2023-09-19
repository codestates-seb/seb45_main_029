package seb45_main_029.server.video.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.response.MultiResponseDto;
import seb45_main_029.server.response.SingleResponseDto;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.video.entity.Bookmark;
import seb45_main_029.server.video.entity.Video;
import seb45_main_029.server.video.mapper.BookmarkMapper;
import seb45_main_029.server.video.mapper.VideoMapper;
import seb45_main_029.server.video.service.VideoService;

import javax.validation.constraints.Positive;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/video")
@RestController
public class VideoController {

    private final VideoService videoService;
    private final VideoMapper videoMapper;
    private final BookmarkMapper bookmarkMapper;

    @GetMapping("/{video-id}")
    public ResponseEntity getVideo(@PathVariable("video-id") @Positive long videoId) {

        Video video = videoService.getVideo(videoId);

        return new ResponseEntity<>(new SingleResponseDto<>(videoMapper.videoToVideoResponseDto(video)), HttpStatus.OK);
    }

    //    운동 영상 키워드 검색
    @GetMapping("/keyword")
    public ResponseEntity getKeywordSearch(@RequestParam int page,
                                           @RequestParam int size,
                                           @RequestParam String keyword) {

        Page<Video> videoPage = videoService.getKeywordSearch(page - 1, size, keyword);
        List<Video> videos = videoPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(videoMapper.videosToVideoResponseDtos(videos), videoPage), HttpStatus.OK);
    }

    //        부위별 운동 영상 리스트
    @GetMapping("/part")
    public ResponseEntity getPartVideos(@RequestParam int page,
                                        @RequestParam int size,
                                        @RequestParam PainArea painArea) {

        Page<Video> videoPage = videoService.getPartVideos(page - 1, size, painArea);
        List<Video> videos = videoPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(videoMapper.videosToVideoResponseDtos(videos), videoPage), HttpStatus.OK);
    }

    //        맞춤 운동 영상 리스트
    @GetMapping("/recommended")
    public ResponseEntity getRecommendedVideos(@RequestParam int page,
                                               @RequestParam int size) {

        Page<Video> videoPage = videoService.getRecommendedVideos(page - 1, size);
        List<Video> videos = videoPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(videoMapper.videosToVideoResponseDtos(videos), videoPage), HttpStatus.OK);
    }


    //    직업별 운동 영상 리스트
    @GetMapping("/job")
    public ResponseEntity getJobVideos(@RequestParam int page,
                                       @RequestParam int size,
                                       @RequestParam Job job) {

        Page<Video> videoPage = videoService.getJobVideos(page - 1, size, job);
        List<Video> videos = videoPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(videoMapper.videosToVideoResponseDtos(videos), videoPage), HttpStatus.OK);
    }

    //    TOP5 인기 동영상 조회
    @GetMapping("/popular")
    public ResponseEntity getPopularVideos() {

        Page<Video> videoPage = videoService.getPopularVideos(0, 5);
        List<Video> videos = videoPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(videoMapper.videosToVideoResponseDtos(videos), videoPage), HttpStatus.OK);
    }

    //            동영상 북마크
    @PostMapping("/bookmark/{video-id}")
    public ResponseEntity bookmark(@PathVariable("video-id") @Positive long videoId) {

        Bookmark bookmark = videoService.bookmark(videoId);

        return new ResponseEntity<>(new SingleResponseDto<>(bookmarkMapper.bookmarkToBookmarkResponseDto(bookmark)), HttpStatus.OK);
    }

    //    북마크 조회
    @GetMapping("/bookmark")
    public ResponseEntity getBookmark(@RequestParam int page,
                                      @RequestParam int size) {
        Page<Bookmark> bookmarkPage = videoService.getBookmark(page - 1, size);
        List<Bookmark> bookmarks = bookmarkPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(bookmarkMapper.bookmarkToBookmarkResponseDtos(bookmarks), bookmarkPage), HttpStatus.OK);

    }

    //  마이페이지 북마크 조회
    @GetMapping("/jobBookmark")
    public ResponseEntity getJobBookmark(@RequestParam int page,
                                         @RequestParam int size,
                                         @RequestParam Job job) {

        Page<Bookmark> bookmarkPage = videoService.getJobBookmark(page - 1, size, job);
        List<Bookmark> bookmarks = bookmarkPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(bookmarkMapper.bookmarkToBookmarkResponseDtos(bookmarks), bookmarkPage), HttpStatus.OK);
    }
    @GetMapping("/painAreaBookmark")
    public ResponseEntity getJobBookmark(@RequestParam int page,
                                         @RequestParam int size,
                                         @RequestParam PainArea painArea) {

        Page<Bookmark> bookmarkPage = videoService.getPainAreaBookmark(page - 1, size, painArea);
        List<Bookmark> bookmarks = bookmarkPage.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(bookmarkMapper.bookmarkToBookmarkResponseDtos(bookmarks), bookmarkPage), HttpStatus.OK);
    }

    //        북마크 제거
    @DeleteMapping("/bookmark/{video-id}")
    public ResponseEntity removeBookmark(@PathVariable("video-id") @Positive long videoId) {

        Bookmark bookmark = videoService.removeBookmark(videoId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
