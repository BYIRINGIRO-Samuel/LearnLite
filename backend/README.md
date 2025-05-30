# Learn Lite

## Scripts

This project uses the following npm scripts to build, run, and develop the app:

| Script      | Description                                                  |
|-------------|--------------------------------------------------------------|
| `npm run build`   | Cleans the `dist/` folder and compiles TypeScript to JavaScript using `tsc`. |
| `npm run prestart`| Runs `build` before starting the app.                         |
| `npm start`       | Runs the compiled app from `dist/index.js`.                  |
| `npm run preserve`| Alias for `build` (compiles the project).                    |
| `npm run serve`   | Runs the TypeScript compiler in watch mode and restarts the Node server on changes (`nodemon`). Uses `concurrently` to run both commands together. |
| `npm run dev`     | Alias for `serve` (runs the app in development mode).        |

---

## How to run the app

### Development mode (auto rebuild + restart on changes)

```bash
npm run dev

### Building the app
npm run build

### Starting the app
npm start
