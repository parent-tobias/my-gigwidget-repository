<script>
  import FileDetail from "./FileDetail.svelte";
  export let directory;

  console.log(`in DirectoryDetail: `, directory);
</script>

<div class='file-directory-detail'>
  <h3>{directory.entry.name}</h3>
  <ul>
    {#if directory.entries?.length}
      {#each directory.entries as listing}
        {#if listing.kind==='directory'}
        <svelte:self directory={listing} />
        {:else}
        {#if listing.entry}
          <FileDetail file={listing.entry} />
        {/if}
        {/if}
      {/each}
    {/if}
  </ul>  
</div>

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