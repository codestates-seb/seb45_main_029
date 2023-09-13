package seb45_main_029.server.comment.entity;

import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.user.entity.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.board.entity.Board;
import javax.persistence.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Comment extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long comment_id;


    @Column(nullable = false)
    private String body;

    @Column
    private boolean accepted = false;

    @Column
    private boolean deleted = false;


    @ManyToOne
    @JoinColumn(name = "BOARD", updatable = false)
    private Board board;

    @ManyToOne
    @JoinColumn(name = "USER", updatable = false)
    private User user;

}