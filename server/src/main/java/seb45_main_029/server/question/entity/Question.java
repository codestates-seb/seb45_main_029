package seb45_main_029.server.question.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.mapstruct.Mapper;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.answer.entity.Answer;
import seb45_main_029.server.user.entity.User;

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

//    @Column
//    private long userId;

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

    @Column
    private boolean status = false;

    @Column
    private boolean isDeleted = false;

    //    @JsonManagedReference
    @OneToMany(mappedBy = "question", fetch = FetchType.LAZY)
    private List<Answer> answers = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
}
