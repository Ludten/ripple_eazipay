import express from "express";
import dotenv from "dotenv";
import fs from 'fs';
import path from 'path';

dotenv.config();
const env = process.env;

const app = express();

function copyFolderRecursive(source: string, target: string) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
  }

  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyFolderRecursive(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

const sourceDirectory = __dirname + '/schema-and-models';
const targetDirectory = __dirname + '/../../simple_graphql/src/schema-and-models';

app.listen(env.PORT, () => {
  console.log( `server running ${env.URL}:${env.PORT}/` );
  console.log( `press CTRL+C to stop server` );

  copyFolderRecursive(sourceDirectory, targetDirectory);
});
