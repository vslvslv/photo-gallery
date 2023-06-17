// // database.service.ts

// import { Injectable } from '@angular/core';
// import * as pgPromise from 'pg-promise';

// @Injectable()
// export class DatabaseService {
//   private db: any;

//   constructor() {
//     const pgp = pgPromise();
//     this.db = pgp({
//       host: 'localhost', // Replace with your container's IP address or hostname
//       port: 5432, // Replace with the container's mapped port if different
//       database: 'fitness-db',
//       user: 'admin',
//       password: 'Test123!',
//     });
//   }

//   // CRUD operations

//   getItems(): Promise<any[]> {
//     return this.db.any('SELECT * FROM items');
//   }

//   createItem(item: any): Promise<any> {
//     return this.db.one(
//       'INSERT INTO items(name, created_by, time, exercises, sets, muscles_worked) VALUES($1, $2, $3, $4, $5, $6) RETURNING *',
//       [
//         item.name,
//         item.createdBy,
//         item.time,
//         item.exercises,
//         item.sets,
//         item.musclesWorked,
//       ]
//     );
//   }

//   // Implement other CRUD operations as needed
// }
