import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { GigService } from "./gig.service";
import { GigControllerBase } from "./base/gig.controller.base";

@swagger.ApiTags("gigs")
@common.Controller("gigs")
export class GigController extends GigControllerBase {
  constructor(
    protected readonly service: GigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
