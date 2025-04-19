
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4916, hash: '441f327f5e7ee228fdd39aa838aee0350901da773394133b5ffcd653108483d0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1008, hash: '89eb64c47b87e72d43c189775faec30288f2424486802cc8917b40b44c70bc1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 15202, hash: '468475cb61dac408c9be29f80eb40f9d9cc4d23bf276fd96b8f4a074370a6dce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DFHGFMPZ.css': {size: 4369, hash: 'UT5uzJzU0rk', text: () => import('./assets-chunks/styles-DFHGFMPZ_css.mjs').then(m => m.default)}
  },
};
