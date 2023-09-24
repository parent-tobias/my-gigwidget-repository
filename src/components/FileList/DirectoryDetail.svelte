<script>
  import FileDetail from "./FileDetail.svelte";
  export let directory;
  export let handleFileSelection=()=>{};

</script>
{#if !directory}
  <div>...loading...</div>
{:else } 
<div class='file-directory-detail'>
  <h3>{directory.entry.name}</h3>
  <ul>
    {#if directory.entries?.length}
      {#each directory.entries as listing}
        {#if listing.kind==='directory'}
        <svelte:self {handleFileSelection} directory={listing} />
        {:else}
        {#if listing.entry}
          <FileDetail {handleFileSelection} file={listing.entry} />
        {/if}
        {/if}
      {/each}
    {/if}
  </ul>  
</div>
  
{/if}

<style>
  * {
    text-align: left;
    padding-left: .25rem;
  }
  h3 {
    font-size: 1.1em;
    font-weight: 800;
  }
</style>