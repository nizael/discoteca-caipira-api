import { ITrailRegisterDTO } from "../use-case/trail/TrailDTO"

export class Trail {
  name: string
  duration: string
  author: string
  album_id: number
  active?: boolean
  created_at: string
  updated_at: string

  constructor(props: ITrailRegisterDTO) {
    this.name = props.name
    this.duration = props.duration
    this.author = props.author
    this.album_id = props.albumId
    this.active = props.active
    this.created_at = new Date().toISOString()
    this.updated_at = new Date().toISOString()
  }
}