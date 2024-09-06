import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GigServiceBase } from "./base/gig.service.base";

@Injectable()
export class GigService extends GigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
