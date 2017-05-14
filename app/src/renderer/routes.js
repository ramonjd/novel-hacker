export default [
  {
    path: '/',
    name: 'landing',
    component: require('components/LandingPageView'),
  },
  {
    path: '/editor',
    name: 'editor',
    component: require('components/EditorPageView'),
  },
  {
    path: '*',
    redirect: '/',
  },
];
