<script>
  /****
   * This should take in the ChordSheetViewer and the ChordList components,
   * and render them both. I think.
   ****/
  import ChordSheetViewer from "../ChordSheetViewer/ChordSheetViewer.svelte";
  import ChordListViewer from "../ChordListViewer/ChordListViewer.svelte";
  import SongControls from "../SongControls/SongControls.svelte";

  import { formatChordSheet, transposeDown, transposeUp, getChords } from "../../services/music/chordSheetTransforms";
  import { onMount } from "svelte";
  import { instruments } from "../../services/music/musicUtils";

  const song = `{title: Bare Necessities}
{subtitle: }
{composer: Terry Gilkyson}
Instrumental intro
{chorus}
[D7]Look for the [G]bare necessities, the [C]simple bare necessities,
[G]Forget about your [E7]worries and your [A7]strife [D7]
I[G] mean the [G7]bare necessities, old [C]Mother Nature's [C7]recipes,
that [G]brings the [E7]bare ne[A7]cessi[D7-alt]ties of [G]life [C7] [G]

Wherever I [D7]wander, wherever I [G]roam,
I couldn't be [D7]fonder of my big [G]home
The [G7]bees are [C]buzzin' in the [Cm]tree,
To make some [G]honey just for [A7]me
When [Em7]you look under the [E7]rocks and plants,
and [Am7]take a glance at the [D7]fancy ants,
Then [G]maybe try a [E7]few [E7]
The bare ne[Am7]cessities of [D7]life will come to [G]you

{chorus}
[D7]Look for the [G]bare necessities, the [C]simple bare necessities,
[G]Forget about your [E7]worries and your [A7]strife [D7]
I[G] mean the [G7]bare necessities, they're [C]why a bear can [C7]rest at ease,
with [G]just the [E7]bare ne[A7]cessi[D7-alt]ties of [G]life [C7] [G]

Now when you pick a [D7]pawpaw, or a prickly [G]pear,
And you prick a [D7]raw paw, the next time [G]beware -
Don't [G7]pick the [C]prickly pear by the [Cm]paw,
When you pick a [G]pear, try to use the [A7]claw.
But [Em7]you don't need to [E7]use the claw
When [Am7]you pick a pear of the [D7]big pawpaw
Have [G]I given you a [E7]clue? [E7]
The bare ne[Am7]cessities of [D7]life will come to [G]you...
they'll [D7]come to [G] you!

Instrumental verse, lines 1 – 4

So just [D7]try and relax, yeah cool it, fall apart in my backyard.
Cause let me tell you [G]something, little britches.
If you [D7]act like that bee acts, [G]uh uh, you're working too hard [G7]
And don't spend your [C]time lookin' a[Cm]round,
For something you [G]want that can't be [A7]found
When [Em7]you find out you can [E7]live without it,
And [Am7] go along not [D7]thinkin' about it.
I'll [G]tell you something [E7]true - [E7]
The bare ne[Am7]cessities of [D7]life will come to [G]you.

{chorus}
[D7]Look for the [G]bare necessities, the [C]simple bare necessities,
[G]Forget about your [E7]worries and your [A7]strife [D7]
I[G] mean the [G7]bare necessities, they're [C]why a bear can [C7]rest at ease,
with [G]just the [E7]bare ne[A7]cessi[D7-alt]ties of [G]life [C7] [G]
`;

let currentInstrument = instruments[0].name;
let chordSheet = formatChordSheet(song);
$: chords = getChords(chordSheet);

const transposeUpFn = ()=>{
  chordSheet = transposeUp(chordSheet);
  console.log(`after up transform: `,chords)
}

const transposeDownFn = () => {
  chordSheet = transposeDown(chordSheet);
  console.log('after down transform', chords)
}
const switchInstrumentsFn = (instrument)=>{
  currentInstrument = instrument;
}

</script>

<div class='song-container'>
  <SongControls {transposeUpFn} {transposeDownFn} {instruments} {switchInstrumentsFn} />
  <ChordSheetViewer {chordSheet} mode='text'/>
  <ChordListViewer instrument={currentInstrument} {chords} />
</div>

<style>
  .song-container {
    background-color: antiquewhite;
    display: grid;
    grid-template-columns: auto 25vw;
    grid-template-rows: 5vh auto;
    grid-template-areas: "header header"
                         "song chords"
                         "footer footer";
  }

  .song-container :global(.song-actions) {
    grid-area: header;
  }
  .song-container :global(.songsheet-panel) {
    grid-area: song;
  }
  .song-container :global(.chords-list-panel){
    grid-area: chords;
  }
</style>