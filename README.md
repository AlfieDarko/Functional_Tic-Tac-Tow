# Functional Javascript (Tic Tac Toe)

> Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data,and side-effects. Functional programming is declarative rather than imperative, and application state flows through pure functions. Contrast with object oriented programming, where application state is usually shared and colocated with methods in objects.

<br>

## Tasks

Using TDD, implement a TicTacToe Board with with one class. All functions must use functional array methods and not mutate or transform input data! <br>
The 4 functions to implement are:<br><br>

- .hasAnybodyWon()<br>
- .draw()<br>
- .availableSquares()<br>
- .nextPlayer()

## Approach

## Thoughts

I had to read up on the principles of functional programming in order to grasp the idea that I was to avoid
transforming or mutating the data I was inputting. At first I thought this was difficult or long winded but in actuality, I felt this has made my code more readable.<br><br> Tracking what was happening to data became easier as everything returned a new variable with the projected data.
<br> I felt that programming this way felt very logical.

Learning about functional programming principles is something that I will definitely be doing more of in order to improve my programming repertoire.

## Concerns

#### Shared state

The grid and winning lines array currently live in what would be the constructor and I'm not sure if this violates the shared state principle since all the prototype functions can access it? I will read up more about what this actually means.
<br> I have to research whether these are strict rules or best practices. <br> <br> Is it the case that I create the same variable for every function that will use it therefore each function has its own depending on need and not sharing data from outside?

## Development setup

<b>1)</b> Git Clone this directory into your local hard-drive<br><br>
<b>2)</b> Run

```sh
npm install
```

Alternatively if you are using yarn then

```sh
yarn
```

<b>3)</b> Run

```sh
npm test
```

Alternatively if you are using yarn then

```sh
yarn test
```

## Contributing

1.  Fork it (<https://github.com/AlfieDarko/Functional_Tic-Tac-Tow>)
2.  Create your feature branch (`git checkout -b feature/fooBar`)
3.  Commit your changes (`git commit -am 'Add some fooBar'`)
4.  Push to the branch (`git push origin feature/fooBar`)
5.  Create a new Pull Request

## Meta

Alfie Darko – me@alfiedarko.co.uk

Distributed under the MIT license. See `LICENSE` for more information.

[https://github.com/AlfieDarko/Functional_Tic-Tac-Tow](https://github.com/AlfieDarko/)
