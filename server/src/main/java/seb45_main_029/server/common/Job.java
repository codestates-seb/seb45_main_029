package seb45_main_029.server.common;

import lombok.Getter;

@Getter
public enum Job {
// job type 나누기 애매한 직업들 분류 회의해서 다시 정해야함
    경영_사무("사무직"),
    연구_기술(""),
    경찰_군인_소방("현장직"),
    보건_의료("사무직 및 현장직"),
    예술_디자인_방송(""),
    미용_여행_음식(""),
    영업_판매_운송(""),
    건설_채굴("현장직"),
    설치_설비_생산("현장직"),
    UNKNOWN("UNKNOWN");

    private String jobType;

    Job(String jobType) {
        this.jobType = jobType;
    }
}
