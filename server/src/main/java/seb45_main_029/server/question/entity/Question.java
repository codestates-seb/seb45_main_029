package seb45_main_029.server.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.answer.entity.Answer;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column
    private long userId;

    @Column
    private String nickname;

    @Column
    private String title;

    @Column
    private String content;

    @Column
    private int likeCount;

    @Column
    private int viewCount;

//    @JsonManagedReference
    @OneToMany(mappedBy = "question", fetch = FetchType.EAGER)
    private List<Answer> answers = new ArrayList<>();

}
