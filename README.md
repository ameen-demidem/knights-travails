### Requirements
#### Minimum
* Node version 6 to run the program
* Node version 10 to run the tests

#### Preferred
* NVM
* Node 16

### Installation
This action is **REQUIRED**

The program has a dependency on an NPM package and will fail if not installed.

If NVM is installed, then first:
```bash
nvm install 16
nvm use 16
```

Then
```bash
npm install
```

### Running the program

#### For Node before version 10
```bash
node src/main
```

#### For Node 10 and later
either
```bash
npm start
```
or
```bash
node src/main
```
### Running the tests
Node version 10 or later is required.
```bash
npm test
```