# Gig-Widget

Building an interactive, editable, customizeable musical fake-book. 

## Understanding the Theory

Initially, I wanted a system that takes in a `.chordpro` (or `.pro`) file, which is a means of presenting a song as a text file with chord symbols in, and display both the song and the chords to play it, in the instrument of choice.

Mostly, I have it working at this point, purely in the theoretical. The next step is to set it up to support either a remote system (database) or local system (`IndexedDB` and/or `File System Access API`). For now, though, it is running [here](https://my-gigwidget-repository.vercel.app/) 

## To Be Done

* Add file system support, 
* add offline support,
* add more system default chords,
* add a system to allow user default chords,