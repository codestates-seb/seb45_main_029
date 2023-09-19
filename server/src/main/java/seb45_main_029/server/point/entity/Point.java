package seb45_main_029.server.point.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Point extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long pointId;

    @Column
    private int point = 0;

    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;
}
