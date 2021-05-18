# Big O notation.

### Lesson Objectives:
- explain exponentiation, logarithms and different numerical bases
- explain What big O is and why it's useful
- Use big O to explain the difference between 2 algorithms that achieve the same result

## super serious video! [little twelve toes](https://www.youtube.com/watch?v=_uJsoZheTR4])

## Some basic math for big O:

Often times we're interested in a number multiplied by itself a certain number of times. This is often the case if we want to understand how many steps it takes to run nested for loops. If we start with the number a and we multiply it by itself n times we say that we have 'raised a to the nth power' and represent it by writing a with a superscript of n. If I multiply 2 by itself 10 times how would I say that, how would I write it? What is is the exponentiation operator in javascript?

How about going the other way? What if I know two times itself *some number of times* is equal to 256? what is the operation called to get the exponent of two? Finding the logarithm! This is a little less straightforward than exponentiation so lets do a few examples together. Given our previous example we would say 'What is log 256 base 2'. It's important to remember that logarithms depend on the base you choose. I would have to raise 10 to a different power for it to equal 256 than I would 2. How do we do logarithms in javascript? what about logarithms in base 2?

There are different number systems that we can use to represent information and some are better for somethings and some are better for others. Base 10 is the most common number system in use today, probably because we often count with our fingers and we happen to have ten of them. Who knows what kind of world we would live in if we had twelve?! You can think of the base of a number system as telling us how many symbols we get to represent quantities. In our standard base 10 system we get 0-9 or ten symbols. In base 16 we get 0-9 + a-f, or 16 symbols. The most important base for understanding big O notation is base 2, or binary. here we only get 0-1, or two symbols. Let's look at how we might represent some numbers in binary.
10 = 1 * 2^3 + 0 * 2^2 + 1 * 2^1 + 0 * 2^0, more compactly that's 1010.
try 15.

Putting it all together, without using google, what is log2(16)?

## Finally the big O!!!

From wikipedia:
>In computer science, big O notation is used to classify algorithms according to how their running time or space requirements grow as the input size grows.

Some key take aways from this. Big O does not give some exact runtime for an algorithm, rather it tells you that when the algorithm is run with more inputs it's run time will scale in a particular way.

## A tale of two searches.

let's say I'm thinking of a number from 0-30, Ok, I'm actually thinking of a number!. When you guess I'm going to either tell you it's too high or two low.  let's go a head and think of an algo to guess it.

The easiest approach might be to start at 1 and work your way up. What's the worst case scenario for that approach? What number would I have to have picked to make you take the maximum number of guesses and how many guesses would that be?

Let's think of a quicker way. Is there a way where each guess can eliminate more numbers than just itself if it's wrong? This algo is called a binary search. let's pseudo code it and talk about it's big O.

If we have time: naive two sum vs hash two sum, fibonacci.

further resources:

[Khan academy logarithms](https://www.khanacademy.org/math/algebra2/exponential-and-logarithmic-functions/introduction-to-logarithms/v/logarithms)
[wikipedia big O notation](https://en.wikipedia.org/wiki/Big_O_notation)
[grokking algorithms book](https://www.manning.com/books/grokking-algorithms)
