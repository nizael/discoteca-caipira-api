import { PrismaClient } from "@prisma/client"
import { TrailRepository } from "../../repositories/TrailRepository"
import { TrailController } from "./TrailController"
import { TrailUseCase } from "./TrailUseCase"

const prima = new PrismaClient()
const trailRepository = new TrailRepository(prima)
const trailUseCase = new TrailUseCase(trailRepository)
const trailController = new TrailController(trailUseCase)
export { trailController }