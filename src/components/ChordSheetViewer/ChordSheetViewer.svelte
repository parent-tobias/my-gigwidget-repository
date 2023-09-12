<script>
  import chordsheetjs from 'chordsheetjs';

  const formatters = {
    html: chordsheetjs.HtmlDivFormatter,
    text: chordsheetjs.TextFormatter
  }
  export let chordSheet;
  export let mode = 'text';


  const formatter = new formatters[mode]() ;
  $: formattedSheet =  chordSheet ? formatter.format(chordSheet) : undefined;
</script>

<div class='songsheet-panel'>
  <div class='chord-sheet-viewer' data-mode={mode}>
    {#if mode==='html'}
    {@html formattedSheet}
    {:else}
    {formattedSheet}
    {/if}
    </div>
</div>

<style>
  @charset "UTF-8";

.songsheet-panel {
  box-sizing: border-box;
  height: 100%;
  background-color: #2F3131;
  color: #f8f8f8;
  display: flex;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1em;
  margin: 0;
  max-height: 100%;
  min-height: 100%;
  padding: 20px;
  display: flex;
  flex: 1 1 auto;
}


.chord-sheet-viewer {
  background-color: antiquewhite;
  color: #2F3131;
  flex: 1 0 auto;
  overflow: auto;
  padding: 10px;
  white-space: pre;
  width: 100%;
}

.chord-sheet-viewer[data-mode=text] {
  font-family: Inconsolata, Monaco, "Andale Mono", "Lucida Console", "Bitstream Vera Sans Mono", "Courier New", Courier, monospace;
  font-size: 14px;
  outline-color: rgba(248, 248, 248, 0.5);
  transition: background-color 100ms ease-out;
  text-align: left;
}

.chord-sheet-viewer[data-mode=html] :global(h2) {
  font-size: 1.1em;
}
.chord-sheet-viewer[data-mode=html] :global(.chord) {
  font-weight: 600;
}
.chord-sheet-viewer[data-mode=html] :global(.chord:not(:last-child) ) {
  padding-right: 10px;
}
.chord-sheet-viewer[data-mode=html] :global(.empty-line) {
  height: 1em;
}
.chord-sheet-viewer[data-mode=html] :global(.paragraph) {
  margin-bottom: 1em;
}
.chord-sheet-viewer[data-mode=html] :global(.chord:not(:last-child)) {
  padding-right: 10px;
}
.chord-sheet-viewer[data-mode=html] :global(.chord:after),
.chord-sheet-viewer[data-mode=html] :global(.lyrics:after) {
  content: "​";
}
.chord-sheet-viewer[data-mode=html] :global(.row) {
  display: flex;
  line-height: 150%;
}

</style>