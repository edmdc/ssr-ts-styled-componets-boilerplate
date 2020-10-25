import path from "path";
import { parallel, series } from "gulp";
import webpack from "webpack";
import clientConfig from "./webpack.client";
import serverConfig from "./webpack.server";
import nodemon from "nodemon";
import chalk from "chalk";

type Name = "Client" | "Server";

const onBuild = (name: Name, done?: any) => {
  const chalkStyles = {
    error: chalk.bold.red,
    stats: chalk.bold.italic.black.bgYellow,
    msg:
      name === "Client"
        ? chalk.bgCyan.black.italic
        : chalk.bgMagenta.black.italic,
  };

  return (err?: Error, stats?: webpack.Stats) => {
    if (err) {
      console.error(chalkStyles.error(err.stack || err));
      return;
    }

    if (stats) {
      console.log(chalkStyles.msg(`${name} - Build Stats`));
      console.log(stats.toString({ colors: true }));
    }

    if (done) {
      done();
    }
  };
};

const clientWatcher = webpack(clientConfig).watch(
  {
    aggregateTimeout: 300,
    ignored: /node_modules/,
  },
  onBuild("Client")
);

const serverWatcher = webpack(serverConfig).watch(
  {
    aggregateTimeout: 300,
  },
  (err, stats) => {
    onBuild("Server")(err, stats);
    nodemon.restart();
  }
);

const clientWatch = () => clientWatcher;

const clientBuild = (done: any) => {
  return webpack(clientConfig).run(onBuild("Client", done));
};

const serverBuild = (done: any) => {
  return webpack(serverConfig).run(onBuild("Server", done));
};

const serverWatch = () => serverWatcher;

const run = () => {
  nodemon({
    execMap: {
      js: "node",
    },
    script: path.join(__dirname, "build", "server"),
    ignore: ["*"],
    watch: ["foo/"],
    ext: "noop",
  })
    .on("restart", () => console.log(chalk.italic.inverse("Restarted!")))
    .on("quit", () => {
      clientWatcher.close(() =>
        console.log(chalk.italic.cyan("Client Watcher ended!"))
      );
      serverWatcher.close(() =>
        console.log(chalk.italic.magenta("Server Watcher ended!"))
      );
      console.log(chalk.italic.inverse("Server - exited!"));
    });
};

exports.build = series(clientBuild, serverBuild);
exports.serve = parallel(clientWatch, serverWatch, run);
