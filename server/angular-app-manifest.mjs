
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/LgCasteloSite-deploy/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 6097, hash: '56a4cd9a07f7145dcc5cef7226ef991e3c59981a8866f8df3b1ceaa7f89744bf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1113, hash: '84b861f4b1b9b02a09b7d4f8e0eb41f54b356626c52552d416d1b0a1c3a508d6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-K4B74LV3.css': {size: 304573, hash: 'fYjp0Co/stQ', text: () => import('./assets-chunks/styles-K4B74LV3_css.mjs').then(m => m.default)}
  },
};
