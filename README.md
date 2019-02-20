# blankbabel

Intended as a blank project template to save me having to set up all the babel stuff every time.  Copy it, don't modify it i.e. delete the .git and git init or just switch the remote

npm install

npm run-script build

npm start

It's watching for changes, so will auto-build (that's why the build script doesn't terminate)

# Debug
Includes a launch config for debugging the transpiled code - remember to do a build to refresh the contents of /lib before debugging

# Jest
Will regard anything named xxx.test.js or xxx.Test.js under the /src/tests folder as a test.  As they are under src, this means that they're included in the babel transpile into the lib folder.  Coverage is enabled.

