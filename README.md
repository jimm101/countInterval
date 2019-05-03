# countInterval

A version of setInterval that automatically terminates after *count* runs.
A single parameter `count` is added after the normal `milliseconds` parameter,
and before any other passed parameters. The code is kept to a minimal footprint.

## Installation

    $ npm i --save countInterval

## Usage

Basic example:

    const countInterval = require('./countInterval');

    const timer = countInterval(() => {
      console.log('fired!', new Date());
    }, 1000, 3);

Outputs:

    fired! 2019-05-03T16:15:31.582Z
    fired! 2019-05-03T16:15:32.584Z
    fired! 2019-05-03T16:15:33.586Z

Same example, passing a parameter to the `setInterval` function:

    const countInterval = require('./countInterval');

    const timer = countInterval(text => {
      console.log(text, new Date());
    }, 1000, 3, 'fired!');


This outputs the same as above.

You can kill the `setInterval` just like normal.

    const timer = countInterval(text => {
      console.log(text, new Date());
    }, 1000, 3, 'fired!');

    clearInterval(timer)

This will stop the timer before it fire, so there's no output.

## Test

To keep things light, there's a test, but it only logs to console.

    $ npm test

This outputs something like:

    test 2019-05-03T16:19:19.114Z 1
    test 2019-05-03T16:19:19.218Z 2
    test 2019-05-03T16:19:19.321Z 3
    test 2019-05-03T16:19:19.422Z 4
    test 2019-05-03T16:19:19.525Z 5
    test 2019-05-03T16:19:19.628Z 6
    test 2019-05-03T16:19:19.732Z 7
    test 2019-05-03T16:19:19.835Z 8
    test 2019-05-03T16:19:19.936Z 9
    test 2019-05-03T16:19:20.037Z 10
