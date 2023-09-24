<script>
  /****
   * This should take in the ChordSheetViewer and the ChordList components,
   * and render them both. I think.
   ****/
  import ChordSheetViewer from "../ChordSheetViewer/ChordSheetViewer.svelte";
  import ChordListViewer from "../ChordListViewer/ChordListViewer.svelte";
  import SongControls from "../SongControls/SongControls.svelte";

  import { formatChordSheet, transposeDown, transposeUp, getChords } from "../../services/music/chordSheetTransforms";
  import { instruments } from "../../services/music/musicUtils";

  import {songText} from '../../services/stores';

  // let song = $songText;

let currentInstrument = instruments[0].name;

$: chordSheet = formatChordSheet($songText);
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
  <div class='chords-container'>
    <ChordListViewer instrument={currentInstrument} {chords} />
  </div>
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
  .song-container .chords-container{
    grid-area: chords;
  }
</style>