<script>
  import { state as fileSystemState, getEntriesRecursivelyFromHandles } from "../../services/filesystem";
  import DirectoryDetail from "./DirectoryDetail.svelte";

  let directory;
  export let handleFileSelection = ()=>{};

  const handleRootDirChange = async (rootDirHandle) => {
      directory = await getEntriesRecursivelyFromHandles([rootDirHandle]);
  }


  fileSystemState.rootDirHandle.subscribe(handleRootDirChange);
  </script>

  <div class='file-list-panel'>
    {#if directory}
      <DirectoryDetail {handleFileSelection} bind:directory={directory[0]} />
    {/if}
  </div>