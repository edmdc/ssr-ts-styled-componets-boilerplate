import path from "path";
import {parallel, series} from "gulp";
import webpack from "webpack";
import clientConfig from "./webpack.client";
import serverConfig from "./webpack.server";
import nodemon from "nodemon";


const onBuild = (name: string, done?:any) => {
  return (err?: Error, stats?: webpack.Stats) => {
    if (err) {
      console.error(err.stack || err);
      return;
    }

    if (stats) {
      console.log(`${name} - Stats`)
      console.log(stats.toString({colors: true}))
    }

    if(done) {
      done();
    }

    console.log(`${name} - Build successful!!`)
  }
}

const clientWatch = () => {
  return webpack(clientConfig).watch({
    aggregateTimeout: 300,
    ignored: /node_modules/
  }, onBuild('Client'))
}

const clientBuild = (done: any) => {
  return webpack(clientConfig).run(onBuild('Client', done));
}

const serverBuild = (done: any) => {
  return webpack(serverConfig).run(onBuild('Server', done));
}

const serverWatch = () => {
  return webpack(serverConfig).watch({
    aggregateTimeout: 300
  }, (err, stats) => {
    onBuild('Server')(err, stats);
    nodemon.restart();
  })
}

const run = () => {
  nodemon({
    execMap: {
      js: 'node'
    },
    script: path.join(__dirname, 'build', 'server'),
    ignore: ['*'],
    watch: ['foo/'],
    ext: 'noop'
  }).on('restart', function() {
    console.log('Restarted!');
  });
}

exports.build = series(clientBuild, serverBuild);
exports.serve = parallel(clientWatch, serverWatch, run);
