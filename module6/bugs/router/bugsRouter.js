import express from 'express'
var router = express.Router();
import bugsController from "../controller/bugsController.js"
router.post("/addBugs",bugsController.addBugs)
router.get("/",bugsController.listBugs)
export default router;