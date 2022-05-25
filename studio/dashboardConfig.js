export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '628e12a162df6376a5c3a744',
                  title: 'Sanity Studio',
                  name: 'sanity-pages-studio',
                  apiId: 'b16a9b4f-106e-4fc6-b35c-eb3338c94221'
                },
                {
                  buildHookId: '628e12a162df6376a5c3a745',
                  title: 'Landing pages Website',
                  name: 'sanity-pages',
                  apiId: '658aac78-1c72-4758-98b8-cde31a884ab3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MisterHutch/sanity_pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-pages.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
