
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ntp-payment-api-doc/blog/archive',
    component: ComponentCreator('/ntp-payment-api-doc/blog/archive','03d'),
    exact: true
  },
  {
    path: '/ntp-payment-api-doc/markdown-page',
    component: ComponentCreator('/ntp-payment-api-doc/markdown-page','99d'),
    exact: true
  },
  {
    path: '/ntp-payment-api-doc/docs',
    component: ComponentCreator('/ntp-payment-api-doc/docs','a8e'),
    routes: [
      {
        path: '/ntp-payment-api-doc/docs/authorize/authorize-query-parameters',
        component: ComponentCreator('/ntp-payment-api-doc/docs/authorize/authorize-query-parameters','052'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/authorize/authorize-response',
        component: ComponentCreator('/ntp-payment-api-doc/docs/authorize/authorize-response','a49'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/authorize/authorize-strc',
        component: ComponentCreator('/ntp-payment-api-doc/docs/authorize/authorize-strc','07c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/intro',
        component: ComponentCreator('/ntp-payment-api-doc/docs/intro','fb9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/start/start-Error',
        component: ComponentCreator('/ntp-payment-api-doc/docs/start/start-Error','d56'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/start/start-ex-response',
        component: ComponentCreator('/ntp-payment-api-doc/docs/start/start-ex-response','857'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/start/start-payment-ex',
        component: ComponentCreator('/ntp-payment-api-doc/docs/start/start-payment-ex','635'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/start/start-query-parameters',
        component: ComponentCreator('/ntp-payment-api-doc/docs/start/start-query-parameters','f2f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/start/start-strc',
        component: ComponentCreator('/ntp-payment-api-doc/docs/start/start-strc','0a9'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/verify-auth/verify-auth-ex',
        component: ComponentCreator('/ntp-payment-api-doc/docs/verify-auth/verify-auth-ex','016'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/verify-auth/verify-auth-query-parameters',
        component: ComponentCreator('/ntp-payment-api-doc/docs/verify-auth/verify-auth-query-parameters','d4f'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/verify-auth/verify-auth-response-ex',
        component: ComponentCreator('/ntp-payment-api-doc/docs/verify-auth/verify-auth-response-ex','99c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/ntp-payment-api-doc/docs/verify-auth/verify-auth-strc',
        component: ComponentCreator('/ntp-payment-api-doc/docs/verify-auth/verify-auth-strc','c27'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ntp-payment-api-doc/',
    component: ComponentCreator('/ntp-payment-api-doc/','70c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
