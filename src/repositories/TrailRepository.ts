import { PrismaClient } from "@prisma/client";
import { Trail } from "../entities/Trail";

export class TrailRepository {
  constructor(private prisma: PrismaClient) { }

  async register(trail: Trail) {
    return await this.prisma.trail.create({
      data: trail
    })
  }

  async delete(id: number) {
    return await this.prisma.trail.delete({
      where: { id }
    })
  }
}