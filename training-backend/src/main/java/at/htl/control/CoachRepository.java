package at.htl.control;

import at.htl.entity.Coach;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CoachRepository implements PanacheRepository<Coach> {
}
