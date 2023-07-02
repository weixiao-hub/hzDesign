interface title {
  title: string
  menu: link[]
}

interface link {
  path: string
  title: string
}

export interface menu extends title {}
