import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Reading Nook",
  description: "Welcome to my world of favorite reads",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Top Reads', link: '/top-reads/'
      },
      {
        text: 'Genres I Love', link: '/genres/'
      },
      {
        text: 'Favorite Authors',
        items: [
          { text: 'Darynda Jones', link: '/darynda-jones' },
          { text: 'Tarryn Fisher', link: '/tarryn-fisher' },
          { text: 'Shannon Messenger', link: '/shannon-messenger' },
          { text: 'Gail Carriger', link: '/gail-carriger' },
          { text: 'Julia Quinn', link: '/julia-quinn' }
        ]
      },
      {
        text: 'Book 2 Movies', link: '/book-to-movies/'
      },
    ],

    sidebar: [
        {
          text: 'Home',
          link: '/'
        },
        {
          text: 'Top Reads',
          link: '/top-reads'
        },
        {
          text: 'Genres I Love',
          link: '/genres'
        },
        {
          text: 'Favorite Authors',
          collapsible: true,
          items: [
            { text: 'Darynda Jones', link: '/darynda-jones' },
            { text: 'Tarryn Fisher', link: '/tarryn-fisher' },
            { text: 'Shannon Messenger', link: '/shannon-messenger' },
            { text: 'Gail Carriger', link: '/gail-carriger' },
            { text: 'Julia Quinn', link: '/julia-quinn' }
          ]
        },
        {
          text: 'Book to Movies',
          link: '/book-to-movies'
        }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
