class Tabs {
  constructor (options) {
    const defaults = {
      activeClass: '_is-active',
    }

    this.settings = Object.assign({}, defaults, options)

    this.init()
  }

  init () {
    const tabsContainers = document.querySelectorAll('[data-tabs]')
    tabsContainers.forEach((tabsContainer, i) => {
      const tabs = tabsContainer.querySelectorAll('[data-tab]')
      const tabsContent = tabsContainer.dataset.tab ?
        document.querySelector(`[data-tabs-content=${tabsContainer.dataset.tab}]`) :
        document.querySelectorAll('[data-tabs-content]')[i]

      const tabsMap = new Map()
      tabs.forEach((tab, j) => {
        const tabContent = tab.dataset.tab ?
          tabsContent.querySelector(`[data-tab=${tab.dataset.tab}]`) :
          tabsContent.querySelectorAll('[data-tab]')[j]
        tabsMap.set(tab, tabContent)
      })

      tabsContainer.addEventListener('click', (evt) => {
        let target = evt.target
        if (target !== tabsContainer) {
          while (!target.hasAttribute('data-tab')) {
            target = target.parentNode
          }

          this.switch(target, tabsMap)
        }
      })

      if (!tabsContainer.querySelector(`[data-tab].${this.settings.activeClass}`)) {
        this.switch(tabs[0], tabsMap)
      }
    })
  }

  switch (target, tabsMap) {
    for (let [tab, tabsContent] of tabsMap) {
      tab.classList.remove(this.settings.activeClass)
      tabsContent.hidden = true
    }

    target.classList.add(this.settings.activeClass)
    tabsMap.get(target).hidden = false
  }
}

export default Tabs
