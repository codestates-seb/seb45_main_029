package seb45_main_029.server.myResolution.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import seb45_main_029.server.audit.Auditable;

import javax.persistence.*;

@NoArgsConstructor
@Setter
@Getter
@Entity
public class MyResolution extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long myResolutionId;

    @Column
    private long userId;

    @Column
    private String content;
}
