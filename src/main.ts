import './style.css'

const pageElement = document.querySelector<HTMLDivElement>('#page-element')

document.querySelector<HTMLButtonElement>('#bt-home')?.addEventListener("click", () => {
  setPage('home')
})
document.querySelector<HTMLButtonElement>('#bt-not-home')?.addEventListener("click", () => {
  setPage('not-home')
})
document.querySelector<HTMLButtonElement>('#bt-gallery')?.addEventListener("click", () => {
  setPage('gallery')
  generateGallery('#works-gallery', worksGallery)
  generateGallery('#girl-gallery', girlGallery)
  generateEmbedList('#motion-gallery', MotionGallery)
  generateEmbedList('#ytvid-gallery', YtGallery)
  generateEmbedList('#music-gallery', musicGallery)
})
document.querySelector<HTMLButtonElement>('#bt-contact')?.addEventListener("click", () => {
  setPage('contact')
  generateButtonList('#links', socials)
})

let currentPage: string = ''

interface Image {
  url: string
  alt: string
}

interface Page {
  buttonID: string
  content: string
}

interface Embed {
  id: string
  desc?: string
  template: string
}

interface LinkButton {
  label: string
  url: string
  color?: string
  tooltip?: string
}

// getting the soundcloud embed id is not quite intuitive
const embedTemplates: {[key:string]:Function} = {
  "yt": (embedLink:string) => {
    return `
      <iframe class="yt" src="https://www.youtube.com/embed/${embedLink}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  },
  "sc": (embedLink:string) => {
    return `
    <iframe style="width: 20rem;" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${embedLink}&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
    `
  }
}

// using discord as the CDN because i don't trust myself (also it's faster anyways)
const worksGallery: Image[] = [
  {
    url: "https://cdn.discordapp.com/attachments/1027882514548789279/1027882865020645396/ruins.png",
    alt: "An aftermath from an ongoing war, that looks suspicioulsy like the empty SEKAI from Project Sekai"
  },{
    url: "https://cdn.discordapp.com/attachments/1027882514548789279/1027882862218858526/crystals.png",
    alt: "A render of a bunch of crystals in the air"
  },{
    url: "https://cdn.discordapp.com/attachments/1027882514548789279/1027882863984652289/pastel-dark.png",
    alt: "Cityline with a looming energy diamond in the background"
  },{
    url: "https://cdn.discordapp.com/attachments/1027882514548789279/1027882865846915102/tomoe-poly.png",
    alt: "Banner design with Tomoe Udagawa in polygonal style"
  },{
    url: "https://cdn.discordapp.com/attachments/1027882514548789279/1027882863208706059/lock-banner.png",
    alt: "Banner design with LOCK from Raise A Suilen"
  },{
    url: "https://cdn.discordapp.com/attachments/1027882514548789279/1027882862738944061/iyashikei.png",
    alt: "An infographic explaining the Iyashikei genre. Using Rin Shima from Yuru Camp as an example"
  }
]

const girlGallery: Image[] = [
  {
    url: "https://i.bandori.party/u/c/art/a/2081Tomoe-Udagawa-Pure-HappyHalloween-YGQxKY.png",
    alt: "Tomoe Udagawa"
  },{
    url: "https://i.bandori.party/u/c/art/a/2073Rinko-Shirokane-Cool-Antique-Bookstore-Tour-8vuoV5.png",
    alt: "Rinko Shirokane"
  },{
    url: "https://cdn.discordapp.com/attachments/699790035704217643/1026820588783812618/unknown.png",
    alt: "Mafuyu Asahina"
  },{
    url: "https://cdn.discordapp.com/attachments/699790035704217643/1026821713268330536/unknown.png",
    alt: "fire hydrant"
  }
]

const MotionGallery: Embed[] = [
  {
    id: "kmiwqzMF6F8",
    desc: "Fan MV for Roselia - Sanctuary with original cover",
    template: "yt",
  },{
    id: "Lfl2LHf-4Jw",
    desc: "Fan MV for a song from the NEW GAME!! series",
    template: "yt"
  },{
    id: "L_iHuC7Wvo8",
    desc: "Short fan MV for Photon Maiden - 4 Challenges",
    template: "yt"
  },{
    id: "HXeW1cCc_mE",
    desc: "Short fan MV for Afterglow - SENSENFUKOKU",
    template: "yt"
  }
]

const YtGallery: Embed[] = [
  {
    id: "TADtZYJVc4k",
    desc: "An in depth review for the BanG Dream! series",
    template: "yt"
  },{
    id: "e73JIsjQffI",
    desc: "A video explaining why I don't really like the K-ON series that much",
    template: "yt"
  },{
    id: "F2pAsfzGbk8",
    desc: "A review  for a niche and not so normal show",
    template: "yt"
  }
]

const musicGallery: Embed[] = [
  {
    id: "1246708291",
    template: "sc"
  },{
    id: "1148013934",
    template: "sc"
  },{
    id: "972780034",
    template: "sc"
  },{
    id: "943014580",
    template: "sc"
  },{
    id: "1083865651",
    template: "sc"
  }
]

const pageAttributes: {[key:string]:Page} = {
  'home': {
    buttonID: '#bt-home',
    content: document.querySelector<HTMLDivElement>('#p-home')?.innerHTML || 'page not found'
  },
  'not-home': {
    buttonID: '#bt-not-home',
    content: document.querySelector<HTMLDivElement>('#p-not-home')?.innerHTML || 'page not found'
  },
  'gallery': {
    buttonID: '#bt-gallery',
    content: document.querySelector<HTMLDivElement>('#p-gallery')?.innerHTML || 'page not found'
  },
  'contact': {
    buttonID: '#bt-contact',
    content: document.querySelector<HTMLDivElement>('#p-contact')?.innerHTML || 'page not found'
  }
}

const socials: LinkButton[] = [
  {
    label: 'Youtube',
    url: 'https://www.youtube.com/channel/UCqmTTMCwW-N-v32DY-g2Glw',
    color: 'linear-gradient(21deg, rgba(251,0,165,1) 0%, rgba(219,0,0,1) 100%);',
    tooltip: 'My long-form reviews + more'
  },{
    label: 'Twitter',
    url: 'https://twitter.com/vlusky_husky',
    color: 'linear-gradient(21deg, rgba(0,123,251,1) 0%, rgba(0,170,219,1) 100%);',
    tooltip: 'Short/WIP contents + more (DM\'s are open)'
  },{
    label: 'Artstation',
    url: 'https://www.artstation.com/vlusky',
    color: 'linear-gradient(21deg, rgba(0,144,251,1) 0%, rgba(76,0,168,1) 100%);',
    tooltip: 'Design work'
  },{
    label: 'Bandcamp',
    url: 'https://vlusky.bandcamp.com/',
    color: 'linear-gradient(21deg, rgba(79,0,251,1) 0%, rgba(219,0,218,1) 100%);',
    tooltip: 'Download/Buy my music'
  },{
    label: 'Soundcloud',
    url: 'https://soundcloud.com/vlusky-husky',
    color: 'linear-gradient(21deg, rgba(251,160,0,1) 0%, rgba(219,55,0,1) 100%);',
    tooltip: 'Stream my music'
  },{
    label: 'Newgrounds',
    url: 'https://vluskyonly.newgrounds.com/audio',
    color: 'linear-gradient(21deg, rgba(251,160,0,1) 0%, rgba(219,213,0,1) 100%)',
    tooltip: 'Songs available for use in Geometry Dash'
  },
]

const mockComponents = document.querySelector<HTMLDivElement>('#mock-components')

if (mockComponents != null) {
  mockComponents.innerHTML = ''
}

function setPage(page: string) {
  if (page === currentPage) {
    return
  }
  
  if (pageElement != null) {
    currentPage = page
    pageElement.innerHTML = pageAttributes[currentPage].content
    pageElement.className = currentPage

    updateButtonState(pageAttributes[currentPage].buttonID)
  }
}

let buttonPressed = document.querySelector<HTMLButtonElement>('#bt-home')

function updateButtonState(buttonID: string) {
  if (buttonPressed != null) {
    buttonPressed.className = 'inactive'
    buttonPressed = document.querySelector<HTMLButtonElement>(buttonID)

    if (buttonPressed != null) {
      buttonPressed.className = 'active'
    }
  }
}

// generate functions are identical
function generateGallery(id:string, images:Image[]) {
  const imageGallery = document.querySelector<HTMLDivElement>(id)
  if (imageGallery != null) {
    images.forEach((image) => {
      imageGallery.innerHTML += `
        <div class="gallery-element">
          <img src="${image.url}" alt="${image.alt}">
          <p>${image.alt}</p>
        </div>
      `
    })
  }
}

function generateEmbedList(id:string, embeds:Embed[]) {
  const EmbedList = document.querySelector<HTMLDivElement>(id)
  if (EmbedList === null) { return }

  embeds.forEach(embed => {
    EmbedList.innerHTML += `
      <div class="gallery-element">
        ${embedTemplates[embed.template](embed.id)}
        <p>${embed.desc || ""}</p>
      </div>
    `
  });
}

// the link defaults to rick roll when button.url is undefined
function generateButtonList(id:string, buttons:LinkButton[]) {
  const buttonList = document.querySelector<HTMLDivElement>(id)
  if (buttonList != null) {
    buttons.forEach((button) => {
      buttonList.innerHTML += `
        <a href="${button.url || 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}"><button style="background: ${button.color}">
          <span>${button.label}</span>
          </button>
          <span class="tooltip">${button.tooltip || `a link to ${button.label}`}</span>
        </a><br>
      `
    })
  }
}

setPage('home')