package at.htl.control;

import at.htl.entity.Equipment;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class EquipmentRepository implements PanacheRepository<Equipment> {
}
