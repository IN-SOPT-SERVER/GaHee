// src/api/user.ts
import express, { Request, Response, Router } from "express";
// express 모듈에서 express, (request, response, router)-> 타입 정의를 위해 불러옴!

const router: Router = express.Router();

const member ={
    member: [
        {
          name: "권세훈",
          group: "ob",
        },
        {
          name: "이종현",
          group: "yb",
        },
         {
          name: "최가희",
          group: "yb",
        },
         {
          name: "장한빛",
          group: "yb",
        },
         {
          name: "한유진",
          group: "yb",
        },
         {
          name: "최가연",
          group: "ob",
        },
      ],
}

router.get("/", (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: "merber조회 쌉 가능 ",
    data:member});
});

module.exports = router;