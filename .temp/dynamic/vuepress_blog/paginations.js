/**
 * Generated by "@vuepress/plugin-blog"
 */

import sorters from './pageSorters'
import filters from './pageFilters'

export default [{
  pid: "tags",
  id: "Vue",
  filter: filters.tags,
  sorter: sorters.tags,
  pages: [{"path":"/tags/Vue/","interval":[0,2]}],
},
{
  pid: "categories",
  id: "前端",
  filter: filters.categories,
  sorter: sorters.categories,
  pages: [{"path":"/categories/前端/","interval":[0,2]}],
}]