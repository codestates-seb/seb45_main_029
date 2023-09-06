package seb45_main_029.server.user.entity;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import seb45_main_029.server.audit.Auditable;

import javax.persistence.*;
import java.time.LocalDateTime;
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

    @Column(nullable = false)
    private String status;

    @Column(nullable = false)
    private String job;

    @ElementCollection(fetch = FetchType.LAZY)
    private List<Long> bookmark = new ArrayList<>();

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();




    //유튜브링크??
    //questions
    //answers




    /*@JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Question> questions = new ArrayList<>();

//     questionInfo에서 가지고 올 data
    public List<UserQuestionInfo> getUserQuestionInfo() {
        List<UserQuestionInfo> userQuestionInfos = new ArrayList<>();

        for(Question question : questions) {
            UserQuestionInfo userQuestionInfo = new UserQuestionInfo();

            userQuestionInfo.setQuestionId(question.getQuestionId());
            userQuestionInfo.setTitle(question.getTitle());
//            userQuestionInfo.setContent(question.getContent());
            userQuestionInfo.setCreated_At(question.getCreatedAt());

            userQuestionInfos.add(userQuestionInfo);
        }
        return userQuestionInfos;
    }


    @JsonIgnore
    @OneToMany(mappedBy = "user")
    private List<Answer> answers = new ArrayList<>();

    public List<UserAnswerInfo> getUserAnswerInfo() {
        List<UserAnswerInfo> userAnswerInfos = new ArrayList<>();

        for(Answer answer : answers) {
            UserAnswerInfo userAnswerInfo = new UserAnswerInfo();

            userAnswerInfo.setAnswerId(answer.getAnswerId());
            userAnswerInfo.setContent(answer.getContent());
            userAnswerInfo.setCreatedAt(answer.getCreatedAt());

            userAnswerInfos.add(userAnswerInfo);
        }
        return userAnswerInfos;
    }*/


    /*@ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    public void setQuestion(Question question) {
        questions.add(question);
        if (question.getUser() != this) {
            question.setUser(this);
        }
    }*/

    /*public void setAnswer(Answer answer) {
        answers.add(answer);
        if(answer.getUser() != this) {
            answer.setUser(this);
        }
    }*/

}
