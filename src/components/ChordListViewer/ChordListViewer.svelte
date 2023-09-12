<script>
  import Chord from "../../lib/Chord/Chord.svelte";

  export let chords = [];
  
  export let instrument;
  
</script>

<div class='chords-list-panel'>
  {#each chords as chord}
  <Chord {chord} {instrument} />
  {/each}
</div>

<style>
  .chords-list-panel {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    height: fit-content(100%);
  }
  .chords-list-panel :global(.chord) {
    width: 7vw;
  }
</style>