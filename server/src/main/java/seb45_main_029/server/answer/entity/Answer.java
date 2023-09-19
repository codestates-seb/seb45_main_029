package seb45_main_029.server.answer.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.question.entity.Question;
import seb45_main_029.server.user.entity.User;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity(name = "Answer")
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column
    private String nickname;

    @Column
    private String content;

    @Column
    private boolean isDeleted;

//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
