package seb45_main_029.server.user.entity;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.answer.entity.Answer;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;
import seb45_main_029.server.point.entity.Point;
import seb45_main_029.server.question.entity.Question;
import seb45_main_029.server.video.entity.Bookmark;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/*
    요구사항 :
    email - 이메일
    password - 비밀번호
    username - 사용자명
    nickname - 닉네임
    motto - 좌우명
    status - 건강상태
    job - 직업

 */

@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "USERS")
public class User extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(name = "user_name", nullable = false)
    private String username;

    @Column(nullable = false, unique = true)
    private String nickname;

    @Column(nullable = false)
    private String motto;

    @Enumerated(EnumType.STRING)
    private Job job;

    @Enumerated(EnumType.STRING)
    private PainArea painArea;

    @JsonManagedReference
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private List<Bookmark> bookmarks = new ArrayList<>();

    @OneToOne(mappedBy = "user", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private Point point;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY)
    private List<Question> question;

    @OneToMany(mappedBy = "user",fetch = FetchType.LAZY)
    private List<Answer> answers;

}
