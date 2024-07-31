import { Request, Response } from "express"
import { TrailUseCase } from "./TrailUseCase"

export class TrailController {
  constructor(private trackUseCase: TrailUseCase) {}
  
  async register(req: Request, res: Response) {
    const { body } = req
    // add data validation
    const response = await this.trackUseCase.register(body)
    return res.json(response)
  }
  async delete(req: Request, res: Response) {
    const { id } = req.params
    // add data validation
    const response = await this.trackUseCase.delete(Number(id))
    return res.json(response)
  }
}