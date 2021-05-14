package at.htl.boundary;

import at.htl.control.CoachRepository;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/coach")
public class CoachEndpoint {

    @Inject
    CoachRepository cr;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response listAll() {
        return Response.ok(cr.listAll()).build();
    }
}
