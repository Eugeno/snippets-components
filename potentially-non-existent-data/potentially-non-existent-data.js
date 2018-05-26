let loadedComments = null

fetch('...')
  .then(response => response.json())
  .then(response => {
    loadedComments = ((response.result || {}).user || {}).comments || []
  })
