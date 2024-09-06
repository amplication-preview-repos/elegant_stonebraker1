import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GigModuleBase } from "./base/gig.module.base";
import { GigService } from "./gig.service";
import { GigController } from "./gig.controller";
import { GigResolver } from "./gig.resolver";

@Module({
  imports: [GigModuleBase, forwardRef(() => AuthModule)],
  controllers: [GigController],
  providers: [GigService, GigResolver],
  exports: [GigService],
})
export class GigModule {}
