import { Router } from "express";
import { albumController } from "../use-case/album";
// import { authenticate } from "../middlewares/Guardian";

export const ALBUM_ROUTES = Router()
  .post('/register', /**authenticate(), */(req, res) => albumController.register(req, res))
  .delete('/:id', /**authenticate(), */(req, res) => albumController.delete(req, res))
  .get('/list-all', /**authenticate(), */(req, res) => albumController.listAll(req, res))
  .get('/search', /**authenticate(), */(req, res) => albumController.search(req, res))
  .get('/:id', /**authenticate(), */(req, res) => albumController.findOne(req, res))
