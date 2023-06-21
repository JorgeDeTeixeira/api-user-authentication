import express, { Request, Response, NextFunction } from "express";
const app = express();
const PORT = 3000;

app.get("/status", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({ foo: "bar" });
});

app.listen(PORT, () => console.log("Server is running in port 3000."));
