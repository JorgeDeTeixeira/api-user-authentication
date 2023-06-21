import express, { Request, Response, NextFunction } from "express";
import userRouter from "./routes/users.router";
const app = express();
const PORT = 3000;

app.use(userRouter);

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: "Vamo pro bar" });
});

app.listen(PORT, () => console.log("Server is running in port 3000."));
