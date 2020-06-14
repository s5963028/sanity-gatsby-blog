export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ee5e63900c1fe1b83059c8f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dm85f172',
                  apiId: 'e3297937-9523-407a-ba4f-48c4b2bdf30c'
                },
                {
                  buildHookId: '5ee5e63a56089ad62d12d827',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-irfe8tsb',
                  apiId: '58903e5a-59ee-41b8-a7e0-90a19a148867'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/s5963028/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-irfe8tsb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
