# NPM Set-up

## Step 1

- initialise NPM in your project

```bash
npm init -y
```

This command will create a file called package.json

## Step 2

- Install packages

```bash
npm install packageName
```

You can abbreviate install to just 'i'

```bash
npm i packageName
```

check the documentation to see how to install the package
This command will install the package and will add the node_modules folder which is a folder of all the dependencies needed

## Step 3

- Ignore your node-modules and secret files
- Add a .gitignore file and add the files and folders in there. You'll see that they gray out, showing this working.

## Step 4

- add a JS files to start coding :)

## Step 5

- Turn JS file into a module.

- We are going to add `type: "module"` into our package.json

## Extra step

- we can add a script to our package.json to run our app
- add a key value under "scripts" object in package.json, and the value is the script we want to run.

```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "node app.js" //dev was added, value: node app.js
  }
```

we can now run `npm run` and then our script name `dev` --> `npm run dev` to run this script.
