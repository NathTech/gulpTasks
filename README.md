# gulpTasks

This is mostly for personal use, but feel free to use it if it helps you.

I was fed up with a huge gulp file, so modularised it into task submodules.

I will add more as I reuse this on other projects.

## Structure

The gulpfile is using esm to allow for `import`

The tasks are in `gulp/tasks/*.js` and each exports a gulp task for running in the `gulpfile.esm.js`

The `gulp/config.js` file contains the configurations for source, destination, etc. for each of the tasks.

At the moment The driving `gulpfile` and the tasks are all dependent on the config file to know what to do.

But I could put the watch task into it's own module perhaps so then only tasks care about the config.
