# Defining the strings

Working with chord charts specifically, we are looking at stringed instruments, and they tend to have similar characteristics: strings, and frets. To create a chord, we press particular strings at frets within the chord structure.

So, in order to know *which* strings to press at which fret, we need to know a few things about the instrument:

* how many frets does the instrument have?
* how many strings, and what is the "base note" of each?

We can create an object to denote each instrument, given those details:

```js
{
  name: 'Standard Guitar',
  strings: ['E','A','D','G','B','E'],
  frets: 19
}
```

Given that, we can dynamically generate any chord we like, and we can specify which strings and frets to use.