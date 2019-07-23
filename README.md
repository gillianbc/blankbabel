# blankbabel

Intended as a blank project template to save me having to set up all the babel stuff every time.  Copy it, don't modify it.

npm install

npm run-script build

The sample code (anything in src) will be compiled into the lib folder

npm start

npm test

It's watching for changes, so will auto-build (that's why the build script doesn't terminate), so you'll need a second terminal to run the other commands.

# Debug
Includes a vscode launch config for debugging the transpiled code - remember to do a build to refresh the contents of /lib before debugging.
Use F9 to add a breakpoint.

# Debug with the Node Inspector
The compiled code is in the lib folder:

```node inspect lib/index.js```

<p>
< Debugger listening on ws://127.0.0.1:9229/43a3ef0a-8ba3-47a8-8088-735964c3c5e4
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in file:///Users/gillianbc/coding/node/temp/lib/index.js:1
</p>

It always stops at line 1 of whatever you're running.
Type ```help``` to see available commands.  
e.g. 
- scripts - what scripts are loaded
- list(15) - list 15 lines of current file
- n - process next line
- cont - continue
- s - step in
- o - step out
- sb('file:///Users/gillianbc/coding/node/temp/lib/index.js',16) - set breakpoint at line 16 of this script (script name is from the scripts command)
- repl - read-exec-print-loop i.e. an expression mode.  Type names of variables or run functions e.g. double(x)

Note, it shows the current execution point in green.  This could be a bracket or a semi-colon, so not that easy to see, but helpful when stepping in and out.

Alternatively, you can insert lines saying ```debugger``` into your source code - these act as breakpoints.

# Debug with Chrome Inspect

The compiled code is in the lib folder:

```node inspect lib/index.js```

<p>
< Debugger listening on ws://127.0.0.1:9229/43a3ef0a-8ba3-47a8-8088-735964c3c5e4
< For help, see: https://nodejs.org/en/docs/inspector
< Debugger attached.
Break on start in file:///Users/gillianbc/coding/node/temp/lib/index.js:1
</p>
  
Now go to this url in chrome:

chrome://inspect/#devices

You should see an entry under Remote Target.  As the source maps are present, it will know the source of your lib code so you can add breakpoints to your original code and step that through.


# Jest
Will regard anything named xxx.test.js or xxx.Test.js under the /src/tests folder as a test.  As they are under src, this means that they're included in the babel transpile into the lib folder.  Coverage is enabled.

