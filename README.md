# ReduxSimpleStarter (forked)

(for original fork that turned into this repo example, see [skplunkerin/reduxSimpleStarter_with_gulp](https://github.com/skplunkerin/reduxSimpleStarter_with_gulp).) This repo contains a good example of React Redux in ES6 syntax that stands quite well on it's own as an excellent example of displaying weather.

This project was forked from [StephenGrider/ReduxSimpleStarter](https://github.com/StephenGrider/ReduxSimpleStarter) repo.
I'm not liking the limitations of `webpack`, in particular: issues with in-consistency in recognizing file changes to trigger re-transforming code, and the long wait time for it to transform code.

I've found much greater success utilizing `gulp`. This fork builds off of Stephen Griders Redux starter, only real difference is it uses `gulp`, along with slight base project changes (basically slight file structure changes and removal of some `npm` packages).

###Getting Started###

There are two methods for getting started with this repo.

####Familiar with Git?#####
Checkout this repo, install depdencies, then start the gulp process with the following:

```
	> git clone git@github.com:StephenGrider/ReduxSimpleStarter.git
	> cd ReduxSimpleStarter
	> npm install
	> npm start
```

####Not Familiar with Git?#####
Click [here](https://github.com/StephenGrider/ReactStarter/releases) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
	> npm install
	> npm start
```
