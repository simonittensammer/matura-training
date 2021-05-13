package at.htl.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@SequenceGenerator(name = "sessSeq", sequenceName = "SESS_SEQ", initialValue = 7)
@Table(name = "APP_TRAININGSESSION")
public class TrainingSession extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sessSeq")
    @Column(name = "SESS_ID")
    public Long id;

    public LocalDateTime timeStamp;

    @ManyToOne
    public Athlete athlete;

    @ManyToOne
    public Coach coach;

    public TrainingSession() {
    }

    public TrainingSession(LocalDateTime timeStamp, Athlete athlete, Coach coach) {
        this.timeStamp = timeStamp;
        this.athlete = athlete;
        this.coach = coach;
    }
}
