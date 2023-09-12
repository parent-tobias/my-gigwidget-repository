<script>
  export let transposeUpFn = () => {};
  export let transposeDownFn = () => {};
  export let instruments = [];
  export let switchInstrumentsFn = (instrument) => {}

  const handleSwitchInstruments = (e)=>{
    switchInstrumentsFn(e.currentTarget.value);
  }
</script>

<div class='song-actions'>
  <select class='instruments-list' on:change={handleSwitchInstruments}>
  {#each instruments as instrument}
    <option value={instrument.name}>{instrument.name}</option>
  {/each}
  </select>
  <button class='transpose-up' on:click={transposeUpFn}>Transpose up</button>
  <button class='transpose-down' on:click={transposeDownFn}>Transpose down</button>
</div>