package seb45_main_029.server.point.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import seb45_main_029.server.point.entity.Point;

public interface PointRepository extends JpaRepository<Point, Long> {
    Point findByUserUserId(long userId);
}
