import { IAlbumRegisterDTO } from "../use-case/album/AlbumDTO"

export class Album {
  name: string
  release_year: number
  artists: string
  cover_image_url: string
  active?: boolean
  created_at: string
  updated_at: string

  constructor(props: IAlbumRegisterDTO) {
    this.name = props.name
    this.release_year = props.releaseYear
    this.artists = props.artists
    this.cover_image_url = props.coverImageUrl
    this.active = props.active
    this.created_at = new Date().toISOString()
    this.updated_at = new Date().toISOString()
  }
}