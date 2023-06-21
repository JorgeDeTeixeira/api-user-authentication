import { Router, Request, Response, NextFunction } from "express";

const userRouter = Router();

userRouter.get("/users", (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Jorge" }];

    res.status(200).json(users);
});

userRouter.get(
    "/users:uuid",
    (req: Request<{ uuid: String }>, res: Response, next: NextFunction) => {
        const uuid = req.params.uuid;

        res.sendStatus(200);
    }
);

export default userRouter;
