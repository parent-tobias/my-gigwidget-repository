# Very Basic Music Theory

## Sort Of.

Okay, so it is more of the crossroads between musical theory and music as math. This is more about the ideas behind generating chord charts dynamically, and the thought process I followed to make it happen.

### First steps: understanding tones.

So throughout this, I am referring to Western (octave-based) music. When I discuss chords, or tones, or steps, I mean in the standard Western twelve-tone octave:

> A, A#, B, C, C#, D, D#, E, F, F#, G, G#

These are the twelve semitones that make up the octave. Each semitone with a `#` can be denoted with a `b` (sharps and flats, collectively referred to as accidentals). If we start counting from A (A=0), then we get a number for each tone:

```
A  = 0
A# = 1
B  = 2
C  = 3
C# = 4
D  = 5
D# = 6
E  = 7
F  = 8
F# = 9
G  = 10
G# = 11
```

If we shift the base of the scale, for example if we denote `C` as our zero-point, we *still* get twelve tones, 0-11, but the value of each index shifts accordingly.

So in short, every scale is made of these twelve semitones. Well and good.

### On to chords.

There are a number of different chord shapes - major, minor, seventh, augmented, diminished, suspended and so on - and how they sound is a factor of the *intervals from the base of the scale*.

Major triad: first, fifth and eigth semitones [0, 4, 7 above]
Minor triad: first, fourth and eighth semitones [0, 3, 7 above]
Seventh:     first, fifth, eight and eleventh [0, 4, 7, 10 above]

...and so forth. Each tone in a given chord is a particular distance from the base of that chord. So if we shift the base, we shift the chord notes - but the chord *shape* remains consistent.

What this means is, if we work from a base of `A`, and a chord "variant" of `min`, then the `Amin` or `Am` chord is the first, fourth and eighth semitones in that scale: `["A","C","E"]`. If we were working from the base of `F#`, then the same intervals would render `["F#","A","C#"]`. The intervals from the base remain the same, while the base itself moves.