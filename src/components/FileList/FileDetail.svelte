<script>
  export let file;
  export let handleFileSelection=(fileThing)=>{};

  const handleClick = ()=> handleFileSelection(file);
</script>

<div on:click={handleClick} class='file-detail'>
  {file.name}
</div>