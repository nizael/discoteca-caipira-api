import { PrismaClient } from "@prisma/client";
import { Album } from "../entities/Album";

export class AlbumRepository {
  constructor(private prisma: PrismaClient) { }

  async register(album: Album) {
    return await this.prisma.album.create({
      data: album
    })
  }

  async listAll() {
    return await this.prisma.album.findMany({
      where: {
        active: true
      }
    })
  }

  async delete(id: number) {
    return await this.prisma.$transaction([
      this.prisma.trail.deleteMany({
        where: {
          album_id: id
        }
      }),
      this.prisma.album.delete({
        where: {
          id
        }
      })
    ])
  }

  async findOne(id: number) {
    return await this.prisma.album.findFirst({
      where: {
        id,
      },
      include: {
        trails: true
      }
    })
  }

  async search(name: string) {
    return await this.prisma.album.findMany({
      where: {
        OR: [
          {
            name: {
              contains: name
            }
          },
          {
            trails: {
              some: {
                name: {
                  contains: name
                }
              }
            }
          }
        ]
      },
      include: {
        trails: true
      }
    })
  }
}