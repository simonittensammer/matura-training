package at.htl.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntityBase;

import javax.persistence.*;

@Entity
@SequenceGenerator(name = "coaSeq", sequenceName = "COA_SEQ", initialValue = 4)
@Table(name = "APP_COACH")
public class Coach extends PanacheEntityBase {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "coaSeq")
    @Column(name = "COA_ID")
    public Long id;

    public String name;

    public int phoneNumber;
}
