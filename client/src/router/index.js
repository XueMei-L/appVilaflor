/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Contact from '@/components/contact'
import ProductFruits from '@/components/menu_section/productFruits'
// import Pescados from '@/components/menu_section/pescados'
// import AddFrutas from '@/components/menu_section/addFrutas'
// import Product from '@/components/menu_section/product'

import SearchPage from '@/components/searchResult'
import EditProduct from '@/components/menu_section/editProduct'

import Privacidad from '@/components/footer/privacidad'
import TerminoDeUso from '@/components/footer/termino_de_uso'
import AvisoLegal from '@/components/footer/aviso_legal'
import Empleo from '@/components/footer/empleo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    {
      path: '/search',
      name: 'Search',
      component: SearchPage
    },
    {
      path: '/menu_section/edit',
      name: 'Edit',
      component: EditProduct
    },

    // seccion de menu
    {
      path: '/menu_section/productFruits',
      name: 'ProductFruits',
      component: ProductFruits
    },

    // {
    //   path: '/menu_section/pescados',
    //   name: 'pescados',
    //   component: Pescados
    // },

    {
      path: '/menu_section/addFrutas',
      name: 'addFrutas',
      component: AddFrutas
    },

    // {
    //   path: '/menu_section/product',
    //   name: 'product',
    //   component: Product
    // },

    // seccion de footer
    {
      path: '/footer/privacidad',
      name: 'Privacidad',
      component: Privacidad
    },

    {
      path: '/footer/termino_de_uso',
      name: 'Termino_de_uso',
      component: TerminoDeUso
    },

    {
      path: '/footer/aviso_legal',
      name: 'Aviso_legal',
      component: AvisoLegal
    },

    {
      path: '/footer/empleo',
      name: 'Empleo',
      component: Empleo
    }
  ]
})
