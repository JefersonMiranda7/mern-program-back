import express, { Application } from 'express';
import cors from 'cors';
import { join } from 'path';
import { corsOptions } from '../config/cors-options';
import { publicRoutes } from '../routes/public.routes';
import { categoriesRoutes } from '../routes/categories.routes';
import { suppliersRoutes } from '../routes/suppliers.routes';
import { productsRoutes } from '../routes/products.routes';
import { tenantsRoutes } from '../routes/tenants.routes';
import { discountsRoutes } from '../routes/discounts.routes';
import { salesRoutes } from '../routes/sales.routes';
import { db } from '../database/connectiondb';
import { seedRoutes } from '../routes/seed.routes';

export class Server {
  private app: Application;
  private port: number | string;
  private path = {
    public: '/',
    categories: '/api/categories',
    products: '/api/products',
    suppliers: '/api/suppliers',
    tenants: '/api/tenants',
    discounts: '/api/discounts',
    sales: '/api/sales',
    seed: '/api/seed'
  };

  constructor() {
    //inicializar atributos
    this.app = express();
    this.port = process.env.PORT || 5000;

    //inicializar algunos métodos

    this.connectToBD(); //conectar a la BD
    this.setMiddleWares(); //inicializar middlewares
    this.setRoutes(); //inicializar rutas
  }

  //asíncrona porque nos queremos conectar a algo que no sabemos cuánto va a demorar en darnos una respuesta
  private async connectToBD() {
    try {
      await db.authenticate();
      console.log('Database connected')
    } catch (error) {
      throw new Error(error as any);      
    }
  }

  private setMiddleWares() {
    //habilitar cors
    this.app.use(cors(corsOptions));
    
    //habilitar carpeta pública
    this.app.use(express.static(join(__dirname, '../../public/')));
    
    //habilitar el formato json para todas las respuestas que tenga
    this.app.use(express.json());
  }
  
  private setRoutes() { //son como middlewares, por lo que el orden importa
    if (process.env.STATE === 'dev') this.app.use(this.path.seed, seedRoutes);
    this.app.use(this.path.categories, categoriesRoutes);
    this.app.use(this.path.suppliers, suppliersRoutes);
    this.app.use(this.path.products, productsRoutes);
    this.app.use(this.path.tenants, tenantsRoutes);
    this.app.use(this.path.discounts, discountsRoutes);
    this.app.use(this.path.sales, salesRoutes);
    this.app.use(this.path.public, publicRoutes);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running on: ', this.port);
    });
  }
}