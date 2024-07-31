import { Request, Response } from "express";
import { AlbumUseCase } from "./AlbumUseCase";

export class AlbumController {
  constructor(private albumUseCase: AlbumUseCase) { }

  async register(req: Request, res: Response) {
    const { body } = req
    // add data validation
    const response = await this.albumUseCase.register(body)
    return res.json(response)
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params
    const response = await this.albumUseCase.delete(Number(id))
    return res.json(response)
  }

  async listAll(req: Request, res: Response) {
    const response = await this.albumUseCase.listAll()
    return res.json(response)
  }

  async findOne(req: Request, res: Response) {
    const { id } = req.params
    const response = await this.albumUseCase.findOne(Number(id))
    return res.json(response)
  }

  async search(req: Request, res: Response) {
    const { name } = req.query
    const result = await this.albumUseCase.search(String(name))
    return res.json(result)
  }
}