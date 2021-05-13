package at.htl.control;

import at.htl.entity.Athlete;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class AthleteRepository implements PanacheRepository<Athlete> {
}
