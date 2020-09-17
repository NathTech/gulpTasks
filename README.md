# gulpTasks

This is mostly for personal use, but feel free to use it if it helps you.

I was fed up with a huge gulp file, so modularised it into task submodules.

I will add more as I reuse this on other projects.

## Usage

1. For now download the files and pop them in the root of your project.
2. The `gulpfile.esm.js` will need editing to import the necessary modules that you need
3. The tasks that you want to be available on the command line need to be exported (see example file)
4. The config.js file needs editing to point gulp in the right direction for your assets' sources and build dirs
5. run `gulp` to run your default task
6. or run `gulp taskName` to run your exported task

## Structure

The gulpfile is using esm to allow for `import`

The tasks are in `gulp/tasks/*.js` and each exports a gulp task for running in the `gulpfile.esm.js`

The `gulp/config.js` file contains the configurations for source, destination, etc. for each of the tasks.

At the moment The driving `gulpfile` and the tasks are all dependent on the config file to know what to do.

But I could put the watch task into it's own module perhaps so then only tasks care about the config.
