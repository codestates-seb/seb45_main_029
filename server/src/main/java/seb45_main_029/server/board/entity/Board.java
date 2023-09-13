package seb45_main_029.server.board.entity;

import lombok.Getter;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import lombok.NoArgsConstructor;
import seb45_main_029.server.comment.entity.Comment;
import seb45_main_029.server.user.entity.User;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter

public class Board extends Auditable {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private long boardId;


        @Column(nullable = false, length = 100)
        private String title;

        @Column(nullable = false)
        private String body;

        @Column
        private String userName;

        @Column
        private int viewCount = 0;

        @Column
        private boolean accepted = false;

        @Column
        private boolean deleted = false;

        @ManyToOne
        @JoinColumn(name = "User_Id", updatable = false)
        private User user;


        @OneToMany(mappedBy = "board")
        private List<Comment> Comments = new ArrayList<>();



}



