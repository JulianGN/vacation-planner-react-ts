import { Router } from "express";

const router = Router();

router.post("/calculate", (req, res) => {
  const { holidays } = req.body;
  // Your logic to calculate best days off
  const bestDaysOff = holidays; // Replace with actual calculation
  res.json({ bestDaysOff });
});

export default router;
