import Observable from "./Observable";

export const state = Observable({
  rootDirhandle: null,
  activeWorkingHandle: null,
  activeWorkingSidebarNode: null,
  hasChanges:false,
});

export const handleFileSelection = (entry, sidebarNode) => {
  if(state.value.hasChanges) {
    if(window.confirm('You have unsaved work. Are you sure you want to discard it?')) {
      openFile(entry, sidebarNode);
    }
  } else {
    openFile(entry, sideBarNode);
  }
}

export const openFile = async (entry, sidebarNode) => {
  state.value = {...state.value, hasChanges: false};

  if(state.value.activeSidebarNode){
    state.value.activeSidebarNode.dataset.isActive = 'false'
  }

  state.value = {
    ...state, 
    activeWorkingHandle: entry,
    activeSidebarNode: sidebarNode
  }

  state.value.activeSidebarNode.dataset.isActive = 'true'

  try {
    const contents = await getFileContentsForHandle(entry);

    return contents;
  } catch(error){
    console.error(`Something went wrong in opening ${entry.name}`)
    console.error(error);
  }
}

export const openFolder  = async () => {
  state.rootDirHandle = await window.showDirectoryPicker({
    types: [
      {
        description: 'Chordpro files',
        accept: {
          'text/chordpro': ['.chordpro'],
        }
      }
    ]
  });

  // do something with the directory handle. Likely want to set
  //  some reactive datastore of file/directory handles?
}

export const saveFileForHandle = async(handle, contents) => {
  try {
    const writable = await handle.createWritable();
    await writable.write(contents);
    await writable.close();
    console.info('File content successfully written.');
  } catch(error){
    console.warn(error);
  }

  state.value = {...state, hasChanges: false};
}

export const getFileContentsForHandle = async (handle) => {
  const file  =await handle.getFile();
  const contents = await file.text();

  return contents;
}

const getEntriesRecursivelyFromHandles = async (handles) => {
  const entries = [];

  for await (const entry of handles) {
    const {kind} = entry;

    switch(kind) {
      case 'file':
        entries.push({
          kind, 
          entry
        });
        break;
      case 'directory':
        const directoryHandles = entry.values();

        entries.push({
          kind,
          entry,
          entries: await getEntriesRecursivelyFromHandles(
            directoryHandles
          ).catch(console.error),
        });
        break;
    }
  }

  return entries.sort((a, b)=>a.kind.localeCompare(b.kind));
}

const createEntry = async (entry) => {
  try {
    await self.showSaveFilePicker({
      startIn: entry,
      suggestedName: 'untitled.chordpro',
      types: [
        {
          description: 'Chordpro files',
          accept: {
            'text/chordpro': ['.chordpro']
          },
        },
      ],
    });

    console.info(`Created ${entry.name}`);
  } catch(error){
    console.error(`Something went wrong in creating ${entry.name}`)
    console.error(error);
  }

  // somehow notify the state of a change?
}

const removeEntry = async (entry) => {
  const {kind, name} = entry;

  if(window.confirm('Are you sure you want to delete this ${kind}?'){
    try {
      await entry.remove();
      console.info(`${name} removed successfully.`);
    } catch(error){
      console.error(`Something went wrong in removing ${entry.name}`)
      console.error(error);
    }
  })
}