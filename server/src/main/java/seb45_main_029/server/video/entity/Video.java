package seb45_main_029.server.video.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;

import javax.persistence.*;
import java.util.List;

@NoArgsConstructor
@Setter
@Getter
@Table(indexes = @Index(name = "title_index",columnList = "title"))
@Entity
public class Video extends Auditable{

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
    private String category;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> tag;

    public Video(String youtubeLink, String title, String thumbnail, String description,String category) {
        this.youtubeLink = youtubeLink;
        this.title = title;
        this.thumbnail = thumbnail;
        this.description = description;
        this.category=category;
    }
}
