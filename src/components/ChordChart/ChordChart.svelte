<script>
  import Chord from '../../lib/Chord/Chord.svelte';
import {chords, instruments} from '../../services/music/musicUtils';
  export let key='A';

  const myChords = chords.filter(({variant})=>variant !== 'min')
  let selectedInstrument=instruments[0].name;
</script>

<article>
  <select bind:value={selectedInstrument}>
    {#each instruments as instrument}
    <option value={instrument.name}>{instrument.name}</option>
    {/each}
  </select>
  <div class='flex flex-wrap w-full'>
    {#each myChords as chord}
      <Chord chord={key+chord.variant} instrument={selectedInstrument} />
    {/each}
  </div>
</article>
