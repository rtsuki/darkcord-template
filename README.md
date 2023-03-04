# Darkcord Template
Basic template to create a Discord bot using [Node.js](https://nodejs.org/) and [Darkcord](https://npmjs.com/package/darkcord).

# Using the template
## Clone the repository
```git
git clone https://github.com/rtsuki/darkcord-template
```
## Install the dependencies
```npm
npm install darkcord
npm install -D eslint
```
## Configure the files
* Edit the `BOT Token` in [index.js](https://github.com/rtsuki/darkcord-template/blob/main/index.js#L11) to your Bot token.
* Edit the `BOT Prefix` in [messageCreate.js](https://github.com/rtsuki/darkcord-template/blob/main/events/messageCreate.js#L1) to your Bot prefix.
## Run the code
```npm
node .
```
