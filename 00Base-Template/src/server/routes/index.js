import express, { Router } from 'express'

const router = Router();

router.use(express.static(__dirname + '/../../client'));

export default router
