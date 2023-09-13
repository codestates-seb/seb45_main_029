package seb45_main_029.server.myResolution.service;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import seb45_main_029.server.myResolution.entity.MyResolution;
import seb45_main_029.server.myResolution.repository.MyResolutionRepository;
import seb45_main_029.server.point.entity.Point;
import seb45_main_029.server.point.repository.PointRepository;
import seb45_main_029.server.user.entity.User;
import seb45_main_029.server.user.service.UserService;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.util.List;

@RequiredArgsConstructor
@Service
public class MyResolutionService {

    private final UserService userService;
    private final MyResolutionRepository myResolutionRepository;
    private final PointRepository pointRepository;

    public MyResolution post(MyResolution myResolution) {

        User loginUser = userService.getLoginUser();
        long loginUserId = loginUser.getUserId();
        myResolution.setUserId(loginUserId);

        LocalDateTime currentDateTime = LocalDateTime.now();

        List<MyResolution> resolutions = myResolutionRepository.findByUserId(loginUserId);

        if (resolutions.isEmpty() || !isDifferentDay(resolutions, currentDateTime)) {

            Point point = loginUser.getPoint();
            point.setPoint(point.getPoint() + 10);
            point.setModifiedAt(currentDateTime);
            pointRepository.save(point);

        }
        return myResolutionRepository.save(myResolution);
    }

    public Page<MyResolution> getMyResolutions(int page, int size) {

        long loginUserId = userService.getLoginUser().getUserId();

        PageRequest pageRequest = PageRequest.of(page, size);
        return myResolutionRepository.findAllByUserId(pageRequest, loginUserId);
    }

    private boolean isDifferentDay(List<MyResolution> resolutions, LocalDateTime currentDateTime) {

        LocalDateTime lastPostDateTime = resolutions.get(0).getCreatedAt();
        DayOfWeek lastPostDay = lastPostDateTime.getDayOfWeek();
        DayOfWeek currentPostDay = currentDateTime.getDayOfWeek();

        return lastPostDay.equals(currentPostDay);

    }
}
