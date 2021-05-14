package at.htl.boundary;

import at.htl.control.AthleteRepository;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/athlete")
public class AthleteEndpoint {

    @Inject
    AthleteRepository ar;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listAll() {
        return Response.ok(ar.listAll()).build();
    }
}
