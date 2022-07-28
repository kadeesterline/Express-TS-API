import express, { Request, Response, NextFunction, response } from "express";

const app = express();

const port = 4000;

app.listen(port, () => {
  console.log(`application is running on port ${port}`);
});

interface helpMenu {
  intro: string;
  endpointOne: string;
}

const getHelp = (request: Request, response: Response, next: NextFunction) => {
  const help: helpMenu[] = [
    {
      intro: "Hi, thanks for using my API.",
      endpointOne: "explain what it does and what parameters it takes in",
    },
  ];

  response.status(200).json(help);
};

app.get("/help", getHelp);
