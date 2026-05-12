import { createRouter, createWebHashHistory } from 'vue-router'  
import PortadaDiario from '../views/PortadaDiario.vue'
import DetalleArticulo from '../views/DetalleArticulo.vue'

const router = createRouter({  
  history: createWebHashHistory(),   
  routes: [  
    {  
      path: '/',  
      name: 'home',  
      component: PortadaDiario  
    },  
    {  
      path: '/articulo/:id',  
      name: 'article',  
      component: DetalleArticulo,  
      props: true  
    }  
  ]  
})

export default router  
export { router };
