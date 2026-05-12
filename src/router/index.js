import { createRouter, createWebHashHistory } from 'vue-router'  
import NewspaperIndex from '../views/NewspaperIndex.vue'
import ArticleDetail from '../views/ArticleDetail.vue'

const router = createRouter({  
  history: createWebHashHistory(),   
  routes: [  
    {  
      path: '/',  
      name: 'home',  
      component: NewspaperIndex  
    },  
    {  
      path: '/articulo/:id',  
      name: 'article',  
      component: ArticleDetail,  
      props: true  
    }  
  ]  
})

export default router  
export { router };
