import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  origin: '*', //voy a recibir el cors de todo lado
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  optionsSuccessStatus: 200
}