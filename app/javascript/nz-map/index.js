


const map = document.getElementById('nz-map')


const paths = map.querySelectorAll('.map-image a')

const links = map.querySelectorAll('.map-list li')





activeArea = (id) => {
   map.querySelectorAll('.is-active').forEach( elm => {
      elm.classList.remove('is-active')
    })
   if(id !== undefined){
     document.getElementById('list-'+ id).classList.add('is-active')
    document.getElementById(id).classList.add('is-active')
   }
}

// forEach chrome Maybe Pollyfill for other browser
paths.forEach( path => {
  path.addEventListener('mouseenter', (e) => {
    activeArea(e.target.id)
  })
})

links.forEach( link => {
  link.addEventListener('mouseenter', (e) => {
    const trimId = e.target.id.replace('list-', '')
    activeArea(trimId)
  })
})

map.addEventListener('mouseover' ,(e) => {
  activeArea()
})
