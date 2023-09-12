package seb45_main_029.server.answer.entity;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.question.entity.Question;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long answerId;

    @Column
    private long userId;

    @Column
    private String nickname;

    @Column
    private String content;

    @Column
    private int likeCount;

//    @JsonBackReference
    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

}
