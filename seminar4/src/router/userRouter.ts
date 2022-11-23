import { Router } from "express";
import { body } from "express-validator";
import { userController } from "../controller";
import { auth } from "../middlewares";
const router: Router = Router();

router.get("/:userId", auth ,userController.getUserById);


//* 유저 생성 - POST api/user
router.post(
  "/",
  [body("name").notEmpty(), body("email").notEmpty(), body("password").isLength({ min: 6 })],
  userController.createUser
);

router.post(
    "/signin",
    [
      body("email").notEmpty(),
      body("email").isEmail(),
      body("password").notEmpty(),
      body("password").isLength({ min: 6 }),
    ],
    userController.signInUser
  );


//* 전체 유저 조회 ( GET api/user )
router.get("/",auth, userController.getAllUser);

//* 유저 정보 업데이트 ( PATCH api/user/:userId )
router.patch("/:userId", auth,userController.updateUser);

//* 유저 삭제 ( DELETE api/user/:userId )
router.delete("/:userId",auth, userController.deleteUser);
export default router;
