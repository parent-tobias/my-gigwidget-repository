## FileList

The `FileList` component is used to display the list of files and directories, using the `File System Access API`.

* When a directory is chosen, the files in that directory are recursively displayed (that is, if there are subdirectories, they are listed as subdirectories). The filenames are clickable, and clicking them opens the file in the viewer.
* Would it make sense to examine each file when the directory is chosen, and if it is a `.chordpro` or `.pro` file, read it in and place it in the `IndexedDB` and/or remote storage? Something to think about.
* Ultimately, add full filesystem support (CRUD functions, both for files and directories)

## SongViewer

The `SongViewer` is built from three sub-components:

* the `SongControls` (the transpose functionality, and the instrument selector)
* the `ChordSheetViewer` (the actual view of the `.chordpro`, with inline chord names displayed over each line)
* the `ChordListViewer` (the collection of chords for the current song, in the current key, on the current instrument)

Currently, the song is selected by the `FileList`, though I would prefer to disengage it from that and make it so that songs aren't files *unless we explicitly make them files*. By default, I think, `.chordpro` songs will be stored in both a local IndexedDB (using `idb`) and remote if/when the user is online (using Yjs and CRDT).
## ChordChart

Given 