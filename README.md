# ww
<b> What is Nightwatch?</b>

Nightwatch is an automated testing framework for web applications and websites, written in Node.js and using the W3C WebDriver API (formerly Selenium WebDriver.

It is a complete browser (End-to-End) testing solution which aims to simplify the process of setting up Continuous Integration and writing automated tests. Nightwatch can also be used for writing Node.js unit tests.

# Install Nightwatch
From NPM:
```sh
$ npm install nightwatch
```
From GitHub:
```sh
$ git clone hhttps://github.com/tripthilohit/ww.git
$ cd ww
$ npm install
```
# Download WebDriver
Nightwatch uses a WebDriver compatible server to control the browser. WebDriver is a W3C specification and industry standard which provides a platform and HTTP protocol to interact with a browser.

Nightwatch includes support for automatically managing the following services:

ChromeDriver
for running tests against the Chrome browser;
download url: https://sites.google.com/a/chromium.org/chromedriver/downloads.
GeckoDriver
for running tests against the Mozilla Firefox browser;
download url: https://github.com/mozilla/geckodriver/releases.

# Install prompt-sync package (if you don't already have)
```sh
npm i prompt-sync
```
Reference Link: https://www.npmjs.com/package/prompt-sync

# How to run tests?

1. Change the root path of the runner.js in nightwatch.js file (./ww/nightwatch.js)
In order to run the driver succesfully make sure you have changed runner.js root path in nightwatch.js file.

2. Change the user data (if required)in globals.js file (./ww/tests/globals.js)

3. Start a selenium server by opening a terminal and cd into the folder that contains the chrome driver (.ww/selenium)
  ```sh
  java -jar selenium.jar
  ```
4. Open a new terminal and cd to the root project folder (/.ww)
```sh
node nightwatch.js tests/test2.js
```

# Results of the tests

## Test 1

<img width="761" alt="Screen Shot 2019-05-12 at 3 04 49 PM" src="https://user-images.githubusercontent.com/38136831/57586683-79114680-74c7-11e9-86f3-864fc82735cc.png">

## Test 2

<img width="759" alt="Screen Shot 2019-05-12 at 3 18 03 PM" src="https://user-images.githubusercontent.com/38136831/57586797-351f4100-74c9-11e9-973f-983047a5be55.png">

## Test 3

<img width="754" alt="Screen Shot 2019-05-12 at 3 22 41 PM" src="https://user-images.githubusercontent.com/38136831/57586865-08b7f480-74ca-11e9-89c3-4224f06a4a68.png">

