<script>
  import { state as fileSystemState, getEntriesRecursivelyFromHandles } from "../../services/filesystem";
  import DirectoryDetail from "./DirectoryDetail.svelte";

  let directory;

  // $: directory = (async()=>{
  //   console.log('did rootDir change?')
  //   return await getEntriesRecursivelyFromHandles(fileSystemState.value.rootDirHandle)
  // })();

  const handleRootDirChange = async ({rootDirHandle}, {rootDirHandle: oldRootDirHandle})=>{
    if(oldRootDirHandle !== rootDirHandle){
      directory = await getEntriesRecursivelyFromHandles([rootDirHandle]);
      console.log(directory)
    }
  }

  fileSystemState.subscribe(handleRootDirChange);
  </script>

  <div class='file-list-panel'>
    {#if directory}
      <DirectoryDetail bind:directory={directory[0]} />
    {/if}
  </div>