import { PrismaClient } from "@prisma/client";
import { IAlbumRegisterDTO } from "./AlbumDTO";
import { Album } from "../../entities/Album";
import { AlbumRepository } from "../../repositories/AlbumRepository";

export class AlbumUseCase {
  constructor(private albumRepository: AlbumRepository) { }

  async register(albumData: IAlbumRegisterDTO) {
    const newAlbum = new Album(albumData)
    const result = await this.albumRepository.register(newAlbum)
    return result
  }

  async listAll() {
    return await this.albumRepository.listAll()
  }

  async delete (id: number) {
    return await this.albumRepository.delete(id)
  }

  async findOne (id: number) {
    return await this.albumRepository.findOne(id)
  }
  async search (name: string) {
    return await this.albumRepository.search(name)
  }
}