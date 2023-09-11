package seb45_main_029.server.video.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;
import seb45_main_029.server.common.Job;
import seb45_main_029.server.common.PainArea;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Table(indexes = @Index(name = "title_index", columnList = "title"))
@Entity
public class Video extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long videoId;

    @Column
    private String youtubeLink;

    @Column
    private String title;

    @Column
    private String thumbnail;

    @Column
    private String description;

    @Column
    private long bookmarkCount = 0;

    @Column
    private long viewCount = 0;

    @Enumerated(EnumType.STRING)
    @Column
    private Job job;

    @Enumerated(EnumType.STRING)
    @Column
    private PainArea painArea;

    @Column
    private boolean isBookmarked = false;

//    @JsonManagedReference
//    @OneToMany(mappedBy = "video", fetch = FetchType.LAZY)
//    private List<Bookmark> bookmarks = new ArrayList<>();

    public Video(String youtubeLink, String title, String thumbnail, String description, PainArea painArea, Job job) {

        this.youtubeLink = youtubeLink;
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.painArea = painArea;
        this.job = job;

    }
}
