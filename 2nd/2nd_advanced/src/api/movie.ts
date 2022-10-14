// src/api/user.ts
import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

const movie = {
    title:"아바타",
    release:"언제나와"
}
router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "movie page",
    data:movie
  });
});

module.exports = router;