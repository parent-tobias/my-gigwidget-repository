<script>
  import Chord from '../../lib/Chord/Chord.svelte';
import {chordsPerScale, keys, chords, instruments, scaleTones} from '../../services/music/musicUtils';
  export let key='A';

  let myKey;
  let myScales;

  $: myKey = keys.find(({key:keyName})=>keyName===key);
  $: myScales = {
    major: scaleTones(key, 'major').map((tone, index)=>`${tone}${chordsPerScale.find(({variant})=>variant==='major').chords[index]}`),
    minor: scaleTones(myKey.relativeMinor, 'minor').map((tone, index)=>`${tone}${chordsPerScale.find(({variant})=>variant==='minor').chords[index]}`)
  }
  let selectedInstrument=instruments[0].name;
</script>

<article>
  <select bind:value={selectedInstrument}>
    {#each instruments as instrument}
    <option value={instrument.name}>{instrument.name}</option>
    {/each}
  </select>
  <div class='flex flex-wrap w-full'>
    <header><h2>{key} major:</h2></header>
    {#each myScales.major as chord}
      <Chord {chord} instrument={selectedInstrument} />
    {/each}
  </div>
  <hr />
  <div class='flex flex-wrap w-full'>
    <header><h2>{myKey.relativeMinor} minor:</h2></header>
    {#each myScales.minor as chord}
      <Chord {chord} instrument={selectedInstrument} />
    {/each}
  </div>
</article>

<style>
  article :global(.chart) {
    flex: 0 0 18vw;
  }
</style>