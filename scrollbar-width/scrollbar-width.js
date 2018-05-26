const getScrollbarWidth = () => {
  const outer = document.createElement('div')
  const inner = document.createElement('div')
  outer.style.overflow = 'scroll'
  document.body.appendChild(outer)
  outer.appendChild(inner)
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth
  document.body.removeChild(outer)
  return scrollbarWidth
}
