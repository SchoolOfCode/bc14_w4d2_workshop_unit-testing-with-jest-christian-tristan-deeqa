import { test, expect } from "@jest/globals";

import {
  calculateRoundResult,
  generateComputerMove,
  calculateNewScores,
} from "./app.js";

/**
 * Task 1 - Test 'calculateRoundResults'
 *
 * Testing criteria:
 *
 * The 'calculateRoundResults' function takes in the playerMove and computerMove as its arguments. Both playerMove and computerMove will respectively be either: 'rock', 'paper', or 'scissors'.
 *
 * Depending on these two arguments, calculateRoundResults should return object containing an outcome (win/loss/draw) and either this message if it's a win/loss:
 *
 *  '`Player chose [rock/paper/scissors] and computer chose [rock/paper/scissors]. [Player wins/Computer wins].`'
 *
 * or this message if it is a draw:
 *
 * '`Both players chose [rock/paper/scissors]. It's a draw.`'
 *
 * For example, if you called the function with the following arguments:
 *
 *    calculateRoundResults('rock', 'paper')
 *
 * it should return the following object:
 *
 *    {
 *        outcome: "loss",
 *        message: "Player chose rock and computer chose paper. Computer wins."
 *    }
 *
 * Given this criteria, write a comprehensive set of Jest tests which show that the function always returns the correct string when it is called in different scenarios of the game.
 *
 * Use your set of tests to debug the function. The first test is written for you (but feel free to rewrite it if you prefer).
 *
 */
test(`calculateRoundResults returns the correct string when playerMove is 'rock' and computerMove is 'paper'`, () => {
  const playerMove = "rock";
  const computerMove = "paper";
  const actual = calculateRoundResult(playerMove, computerMove);
  const expected = "Player chose rock and computer chose paper. Computer wins.";
  expect(actual).toBe(expected);
});

/**
 * Task 2 - Test calculateNewScores
 *
 * The calculateNewScores function takes in a current scores object as well as a result (win/loss/draw).
 *
 * It should return a brand new object containing the values from the current scores object, but also with one of the values incremented.
 *
 * If the result is "win", the value for the "playerScoreCounter" property should be incremented.
 * If the result is "loss", the value for the "computerScoreCounter" property should be incremented.
 * If the result is "draw", the value for the "drawCounter" property should be incremented.
 *
 * So for example the following function call:
 *
 *    calculateNewScores({
 *      playerScoreCounter: 0,
 *      computerScoreCounter: 0,
 *      drawCounter: 0,
 *    }, 'win')
 *
 * should return a new object:
 *
 *    {
 *        playerScoreCounter: 1,
 *        computerScoreCounter: 0,
 *        drawCounter: 0,
 *    }
 *
 * Write a set of tests which show the function works as intended, and debug the function if it does not work.
 */

/**
 * Task 3 - Test generateComputerMove
 *
 * The `generateComputerMove` function should return a string value of either 'rock', 'paper' or 'scissors'.
 *
 * Write a test which shows the function works as intended, and debug the function if the test fails.
 *
 * Since `generateComputer internally use `Math.random`, this is difficult to test. Research and explore an approach for testing logic that contains "randomness".
 */
