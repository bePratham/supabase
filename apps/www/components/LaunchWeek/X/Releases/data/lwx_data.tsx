import { ReactNode } from 'react'

type StepLinkType = 'productHunt' | 'video' | 'docs' | 'xSpace' | 'blog'

export interface StepLink {
  type: StepLinkType
  text?: string
  icon?: any
  href: string
}

export interface StepProps {
  title: string
  badge?: string
  blog?: string
  docs?: string
  description?: string
  github?: string
  hackernews?: string
  product_hunt?: string
  thumb?: string
  url?: string
  video?: string
  twitter_spaces?: string
  className?: string
  hideInBlog?: boolean
  bg_layers?: {
    img?: string
    mobileImg?: string
    className?: string
  }[]
  steps: StepProps[] | []
}

export interface WeekDayProps {
  id: string
  title: string
  shipped: boolean
  date: string
  published_at: string
  isToday?: boolean
  hasCountdown?: boolean
  description: string | ReactNode
  d: number
  dd: string
  links?: StepLink[]
  videoThumbnail?: string
  blog: string
  steps: StepProps[] | []
}

export const endOfLWX = '2023-12-15T23:59:59.999-08:00'

const days: WeekDayProps[] = [
  {
    id: 'day-1',
    d: 1,
    dd: 'Mon',
    title: 'Supabase Studio',
    shipped: true,
    isToday: false,
    blog: '/blog/studio-introducing-assistant',
    hasCountdown: false,
    date: '11 Dec',
    published_at: '2023-12-11T08:00:00.000-08:00',
    description: (
      <>
        Supabase Studio: introducing an <strong>AI Assistant</strong>,{' '}
        <strong>Postgres roles</strong>, and <strong>user impersonation</strong>
      </>
    ),
    links: [
      // {
      //   type: 'productHunt',
      //   href: 'https://www.producthunt.com/',
      // },
      {
        type: 'blog',
        href: '/blog/studio-introducing-assistant',
      },
      {
        type: 'video',
        href: 'hu2SQjvCXIw',
      },
      {
        type: 'xSpace',
        href: 'https://twitter.com/i/spaces/1OwxWYgDwXVGQ',
      },
    ],
    steps: [
      {
        title: '',
        blog: '/blog/studio-introducing-assistant',
        bg_layers: [
          {
            img: '/images/launchweek/lwx/day1/d1_studio.svg',
            mobileImg: '/images/launchweek/lwx/day1/d1_studio_mobile.svg',
          },
        ],
        steps: [],
      },
    ],
  },
  {
    id: 'day-2',
    d: 2,
    dd: 'Tue',
    title: 'Edge Functions',
    shipped: true,
    isToday: true,
    hasCountdown: false,
    blog: '/blog/edge-functions-node-npm',
    date: '12 Dec',
    published_at: '2023-12-12T08:00:00.000-08:00',
    description: (
      <>
        Edge Functions: <strong>Node</strong> and native <strong>npm</strong> compatibility
      </>
    ),
    links: [
      {
        type: 'blog',
        href: '/blog/edge-functions-node-npm',
      },
      {
        type: 'video',
        href: 'eCbiywoDORw',
      },
      {
        type: 'xSpace',
        href: 'https://twitter.com/i/spaces/1MYGNovDoaLJw',
      },
    ],
    steps: [
      {
        title: '',
        blog: '/blog/edge-functions-node-npm',
        bg_layers: [
          {
            img: '/images/launchweek/lwx/day2/d2_edge.svg',
            mobileImg: '/images/launchweek/lwx/day2/d2_edge_mobile.svg',
          },
        ],
        steps: [],
      },
    ],
  },
  {
    id: 'day-3',
    d: 3,
    dd: 'Wed',
    title: '',
    shipped: false,
    hasCountdown: true,
    blog: '',
    date: '13 Dec',
    published_at: '2023-12-13T08:00:00.000-08:00',
    description: '',
    links: [
      {
        type: 'xSpace',
        href: 'https://twitter.com/i/spaces/1eaKbgDBgyoGX',
      },
    ],
    steps: [],
  },
  {
    id: 'day-4',
    d: 4,
    dd: 'Thu',
    title: '',
    shipped: false,
    blog: '',
    date: '14 Dec',
    published_at: '2023-12-14T08:00:00.000-08:00',
    description: '',
    links: [
      {
        type: 'xSpace',
        href: 'https://twitter.com/i/spaces/1ypKdkWjkjrxW',
      },
    ],
    steps: [],
  },
  {
    id: 'day-5',
    d: 5,
    dd: 'Fri',
    title: '',
    shipped: false,
    blog: '',
    date: '15 Dec',
    published_at: '2023-12-15T08:00:00.000-08:00',
    description: '',
    links: [
      {
        type: 'xSpace',
        href: 'https://twitter.com/i/spaces/1vAxRvjmvRgxl',
      },
    ],
    steps: [],
  },
]

export default days
