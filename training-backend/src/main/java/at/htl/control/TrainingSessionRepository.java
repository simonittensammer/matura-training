package at.htl.control;

import at.htl.entity.TrainingSession;
import io.quarkus.hibernate.orm.panache.Panache;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class TrainingSessionRepository implements PanacheRepository<TrainingSession> {

    public void update(TrainingSession trainingSession) {
        Panache.getEntityManager().merge(trainingSession);
    }
}
