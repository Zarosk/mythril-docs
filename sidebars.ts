import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    'index',
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/quick-start',
        'getting-started/installation',
        'getting-started/configuration',
      ],
    },
    {
      type: 'category',
      label: 'Commands',
      collapsed: false,
      items: [
        'commands/index',
        'commands/forge',
        'commands/task',
        'commands/note',
        'commands/settings',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      collapsed: false,
      items: [
        'features/index',
        'features/ai-integration',
        'features/task-management',
        'features/context-awareness',
        'features/byok',
      ],
    },
    {
      type: 'category',
      label: 'Legal',
      collapsed: true,
      items: [
        'legal/privacy',
        'legal/terms',
      ],
    },
  ],
};

export default sidebars;
