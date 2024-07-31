# CECACO

CECACO is a car license school scheduling system developed using TypeScript, Express.js, Prisma ORM, and PostgreSQL.

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/caldas479/CECACO.git
   cd CECACO
   ```
2. Start db:
   ```sh
   sudo service postgresql start
   sudo -u postgres psql
   ```
3. Install dependencies:
   ```sh
   yarn install
   ```
4. Set up the database:
   ```sh
   yarn prisma:migrate
   yarn prisma:generate
   ```
5. Start the server:
   ```sh
   yarn dev
   ```

### Environment Variables

Create a `.env` file in the root of your project and add your environment variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
```

## Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Compile the TypeScript code.
- `yarn start`: Start the compiled code.
- `yarn prisma:migrate`: Run Prisma migrations.
- `yarn prisma:generate`: Generate Prisma client.

## License

This project is licensed under the MIT License.
