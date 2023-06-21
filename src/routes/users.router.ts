import { Router, Request, Response, NextFunction } from "express";

const userRouter = Router();

userRouter.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Jorge" }];

    res.status(200).json(users);
});

export default userRouter;
