import path from "path";
import {parallel} from "gulp";
import webpack from "webpack";
import clientConfig from "./webpack.client";
import serverConfig from "./webpack.server";
import nodemon from "nodemon";


const onBuild = (done?:any) => {
  return (err, stats) => {
    if (err) {
      console.error(err.stack || err);
      if (err.details) {
        console.error(err.details);
      }
      return;
    }

    const info = stats.toString({colors: true});

    if (stats.hasErrors()) {
      console.error(info.errors);
    }

    if (stats.hasWarnings()) {
      console.warn(info.warnings);
    }

    if(done) {
      done();
    }
  }
}

const frontEndWatch = () => {
  webpack(clientConfig).watch({
    aggregateTimeout: 300,
    ignored: /node_modules/
  }, onBuild())
}

const serverWatch = () => {
  webpack(serverConfig).watch({
    aggregateTimeout: 300
  }, (err, stats) => {
    onBuild()(err, stats);
    nodemon.restart();
  })
}

const watch = () => {
  parallel(frontEndWatch, serverWatch);
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

exports.run = parallel(watch, run)
