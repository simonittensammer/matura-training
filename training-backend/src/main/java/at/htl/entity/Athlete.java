package at.htl.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;
import java.util.List;

@Entity
@SequenceGenerator(name = "athSeq", sequenceName = "ATH_SEQ", initialValue = 1)
@Table(name = "APP_ATHLETE")
public class Athlete extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "athSeq")
    @Column(name = "ATH_ID")
    public Long id;

    public String name;

    @ManyToOne
    public Coach personalTrainer;

    @OneToMany(mappedBy = "athlete", cascade = CascadeType.MERGE)
    public List<Equipment> equipmentList;
}
