package at.htl.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.*;

@Entity
@SequenceGenerator(name = "eqipSeq", sequenceName = "EQIP_SEQ", initialValue = 5)
@Table(name = "APP_EQUIPMENT")
public class Equipment extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "eqipSeq")
    @Column(name = "EQIP_ID")
    public Long id;

    public String type;
    public double price;

    @ManyToOne
    @JsonbTransient
    public Athlete athlete;
}
