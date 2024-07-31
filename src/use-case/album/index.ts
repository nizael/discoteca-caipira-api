import { PrismaClient } from "@prisma/client";
import { AlbumController } from "./AlbumController";
import { AlbumRepository } from "../../repositories/AlbumRepository";
import { AlbumUseCase } from "./AlbumUseCase";

const prima = new PrismaClient()
const albumRepository = new AlbumRepository(prima)
const albumUseCase = new AlbumUseCase(albumRepository)
const albumController = new AlbumController(albumUseCase)

export { albumController }