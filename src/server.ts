import express, { Application,Router } from 'express';
import { config } from 'dotenv';

export class Server {
	app: Application;
	port: number;
	constructor() {
    config({
      path: '.env',
    });
		this.app = express();
		this.port = Number(process.env.PORT) || 3000;
	}

  initializeMiddlewares(middlewares: any[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }

	initialzeRoutes(routes: Router[]) {
		routes.forEach((route) => {
			this.app.use(route);
		});
	}

	start() {
    this.app.listen(this.port, () => {
			console.log(`Server listening on port ${this.port}`);
		});
  }
}
