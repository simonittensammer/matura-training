package at.htl.boundary;

import at.htl.control.AthleteRepository;
import at.htl.control.CoachRepository;
import at.htl.control.TrainingSessionRepository;
import at.htl.entity.Athlete;
import at.htl.entity.Coach;
import at.htl.entity.TrainingSession;

import javax.inject.Inject;
import javax.json.JsonObject;
import javax.transaction.Transactional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Locale;

@Path("/trainingSession")
public class TrainingSessionEndpoint {

    @Inject
    TrainingSessionRepository tsr;

    @Inject
    CoachRepository cr;

    @Inject
    AthleteRepository ar;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listAll() {
        return Response.ok(tsr.listAll()).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response findById(@PathParam("id") Long id) {
        return Response.ok(tsr.findById(id)).build();
    }

//    @GET
//    @Produces(MediaType.APPLICATION_JSON)
//    public Response findByIdUsingQueryParam(@QueryParam("id") Long id) {
//        return Response.ok(tsr.findById(id)).build();
//    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public Response deleteById(@PathParam("id") Long id) {
        TrainingSession trainingSession = tsr.findById(id);
        if (trainingSession == null) {
            return Response.status(Response.Status.NOT_FOUND).build();
        }
        tsr.deleteById(id);
        return Response.noContent().build();
    }

    @POST
    @Transactional
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Response create(JsonObject jsonObject) {
        Athlete athlete = ar.findById(
                jsonObject.getJsonNumber("athleteId").longValue()
        );

        Coach coach = cr.findById(
                jsonObject.getJsonNumber("coachId").longValue()
        );

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(
                "yyyy-MM-dd'T'HH:mm:ss",
                Locale.ENGLISH
        );

        TrainingSession trainingSession = new TrainingSession(
                LocalDateTime.parse(jsonObject.getString("timeStamp"), formatter).plusDays(1),
                athlete,
                coach
        );

        tsr.persist(trainingSession);
        return Response.ok(trainingSession.id).build();
    }
}
