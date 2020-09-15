export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5f601565b055361cb549d91e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-wdw48uzs',
                  apiId: '58269a74-8fc5-470c-ac9a-bbe8038f7188'
                },
                {
                  buildHookId: '5f6015667d3553228bd2a79b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dqwizu6m',
                  apiId: 'fd227e36-7b57-4d28-8d5b-a10caa127cd9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stevechez/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dqwizu6m.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
