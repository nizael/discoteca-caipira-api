import { Router } from "express";
import { ALBUM_ROUTES } from "./albumRoutes";
import { TRAIL_ROUTES } from "./trailRoutes";


export const INDEX_ROUTES = Router()
.use('/album', ALBUM_ROUTES)
.use('/trail', TRAIL_ROUTES)