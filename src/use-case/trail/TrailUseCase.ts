import { Trail } from "../../entities/Trail"
import { TrailRepository } from "../../repositories/TrailRepository"
import { ITrailRegisterDTO } from "./TrailDTO"

export class TrailUseCase {
  constructor(private trailRepository: TrailRepository) { }

  async register(trailData: ITrailRegisterDTO) {
    const trail = new Trail(trailData)
    const result = await this.trailRepository.register(trail)
    return result
  }
  async delete(id: number) {
    const result = await this.trailRepository.delete(id)
    return result
  }
}