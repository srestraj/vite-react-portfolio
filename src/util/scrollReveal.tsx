export const scrollReveal = () => {
  const wipers = document.querySelectorAll('.animating-image') as NodeListOf<HTMLImageElement>
  const animatingBg: any = document.querySelectorAll('.animating-bg') as NodeListOf<HTMLImageElement>

  wipers.forEach((wiper) => {
    const rect = wiper.getBoundingClientRect()
    const siblingElement = wiper.nextElementSibling as HTMLDivElement || null
    if (rect.top < (window.innerHeight || document.documentElement.clientHeight)) {
      wiper.style.opacity = '100%'
      if (siblingElement) {
        siblingElement.style.width = '0%'
      }
    }
  })
}
