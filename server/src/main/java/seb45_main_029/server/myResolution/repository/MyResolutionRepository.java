package seb45_main_029.server.myResolution.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.myResolution.entity.MyResolution;

import java.util.List;

public interface MyResolutionRepository extends JpaRepository<MyResolution, Long> {
//    MyResolution findByUserId(long userId);

    List<MyResolution> findByUserId(long userId);

    Page<MyResolution> findAllByUserId(PageRequest pageRequest, long userId);
}
