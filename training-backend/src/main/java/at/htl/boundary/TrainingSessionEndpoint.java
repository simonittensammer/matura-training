package at.htl.boundary;

import at.htl.control.TrainingSessionRepository;
import at.htl.entity.TrainingSession;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("/trainingSession")
public class TrainingSessionEndpoint {

    @Inject
    TrainingSessionRepository tsr;

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

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response findByIdUsingQueryParam(@QueryParam("id") Long id) {
        return Response.ok(tsr.findById(id)).build();
    }
}
