
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/toast"
  }
],
  assets: new Map([
['index.csr.html', {size: 2324, hash: '7519af25cfe1a4bee1efb7f50b019323d9342ed445da8ec33e2176ec36ba2e78', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1137, hash: 'aed15a24c073ae2acb0ad3349acf18dd03245ad90e0f7cb13eb82137dbf45615', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['dashboard/index.html', {size: 20568, hash: '2da316afca28a502d806352a9400f24c8caf5888fbb336733a3933ae8901d9d0', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)}], 
['toast/index.html', {size: 7845, hash: 'a79f9a3944cadb38f2ad883c70061bd96e539101461414726731b704909147e9', text: () => import('./assets-chunks/toast_index_html.mjs').then(m => m.default)}], 
['login/index.html', {size: 10129, hash: 'd9e8529445296fba7f6ca1ebe9c63835b6965975477f12b98a86ff918dcb2611', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)}], 
['styles-UJIVL3GY.css', {size: 15543, hash: 'B7cbj1p1JYI', text: () => import('./assets-chunks/styles-UJIVL3GY_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
