package seb45_main_029.server.video.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import seb45_main_029.server.exception.BusinessLogicException;
import seb45_main_029.server.exception.ExceptionCode;
import seb45_main_029.server.member.entity.Member;
import seb45_main_029.server.member.repository.MemberRepository;
import seb45_main_029.server.video.entity.Video;
import seb45_main_029.server.video.repository.VideoRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


@RequiredArgsConstructor
@Service
public class VideoService {

    private final VideoRepository videoRepository;
    private final MemberRepository memberRepository;

    //    부위별 운동영상 리스트 조회
    @Transactional(readOnly = true)
    public Page<Video> getPartVideos(int page, int size, String keyword) {

        return null;
    }


    //    직업별 운동영상 리스트 조회
    @Transactional(readOnly = true)
    public Page<Video> getJobVideos(int page, int size) {
        Member member = new Member(1L, "son@gmail.com", "son", "개발자", "허리디스크");
        String job = member.getJob();

        return videoRepository.findByTitleContaining(PageRequest.of(page, size), job);

    }

    //    맞춤 운동 영상 조회
    @Transactional(readOnly = true)
    public Page<Video> getRecommendedVideos(int page, int size) {
        Member member = new Member(1L, "son@gmail.com", "son", "개발자", "허리디스크");
        String status = member.getStatus();

        return videoRepository.findByTitleContaining(PageRequest.of(page, size), status);

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

    public Member bookmark() {
//        사용자가 북마크 버튼을 누르면 로그인한 정보를 기반으로 멤버의 북마크 필드에 리스트 형식으로 해당 동영상의 videoId 를 넣어주는 방식을 생각함
        return null;
    }

    public Video findVideo(long videoId) {
        Video findVideo = videoRepository.findById(videoId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.VIDEO_NOT_FOUND));
        videoRepository.save(findVideo);

        return findVideo;
    }
}
