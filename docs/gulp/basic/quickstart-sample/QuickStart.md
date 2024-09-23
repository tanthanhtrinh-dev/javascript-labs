# [Quick Start](https://gulpjs.com/docs/en/getting-started/quick-start/)

- Check for node, npm, and npx
```bash
node --version; npm --version; npx --version;
```

- Install the gulp command line utility
```bash
npm install --global gulp-cli
```  
- Create a project directory and navigate into it
```bash
npx mkdirp my-project; cd my-project;
```
- Create a package.json file in your project directory
 ```bash
npm init;
 ``` 
- Install the gulp package in your devDependencies
```bash
npm install --save-dev gulp;
```
- Verify your gulp versions
```bash
gulp --version;
```
- Create a gulpfile
```bash

```
> Create a file named gulpfile.js in your project root with these contents:
```javascript
function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
```

- Test it
```bash
gulp
```

- Result