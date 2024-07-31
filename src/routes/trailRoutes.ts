import { Router } from "express";
import { trailController } from "../use-case/trail";
// import { authenticate } from "../middlewares/Guardian";

export const TRAIL_ROUTES = Router()
  .post('/register',  /**authenticate(), */(req, res) => trailController.register(req, res))
  .delete('/:id',  /**authenticate(), */(req, res) => trailController.delete(req, res))
