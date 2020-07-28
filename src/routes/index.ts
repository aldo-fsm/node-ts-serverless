import express, { Router } from 'express';
import authRoute from './auth-route';
import userRoute from './user-route';
const router = Router();

router.get(`/`, (req, res) => {
  res.json({ message: `It's all right here` });
});

router.use(`/api`, authRoute(express));
router.use(`/api/users`, userRoute(express));

export default router;
