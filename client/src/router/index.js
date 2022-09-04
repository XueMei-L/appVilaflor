/* eslint-disable no-undef */
import Vue from 'vue'
import Router from 'vue-router'

import Register from '@/components/Register'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Menu from '@/components/Menu'
import Contact from '@/components/contact'
import FrutasNormal from '@/components/menu_section/frutasNormal'
import PescadosNormal from '@/components/menu_section/pescadosNormal'
import PerfumesNormal from '@/components/menu_section/perfumesNormal'
import CarnesNormal from '@/components/menu_section/carnesNormal'
import Pescados from '@/components/menu_section/pescados'
import Perfumes from '@/components/menu_section/perfumes'
import Frutas from '@/components/menu_section/frutas'
import Carnes from '@/components/menu_section/carnes'

import AddProduct from '@/components/menu_section/addProduct'

import SearchPage from '@/components/searchResult'

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
      path: '/Login',
      name: 'Login',
      component: Login
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

    // seccion de menu
    {
      path: '/menu_section/frutasNormal',
      name: 'frutasNormal',
      component: FrutasNormal
    },
    {
      path: '/menu_section/pescadosNormal',
      name: 'pescadosNormal',
      component: PescadosNormal
    },
    {
      path: '/menu_section/perfumesNormal',
      name: 'perfumesNormal',
      component: PerfumesNormal
    },
    {
      path: '/menu_section/carnesNormal',
      name: 'carnesNormal',
      component: CarnesNormal
    },
    {
      path: '/menu_section/frutas',
      name: 'frutas',
      component: Frutas
    },
    {
      path: '/menu_section/pescados',
      name: 'pescados',
      component: Pescados
    },
    {
      path: '/menu_section/carnes',
      name: 'carnes',
      component: Carnes
    },
    {
      path: '/menu_section/perfumes',
      name: 'perfumes',
      component: Perfumes
    },

    // {
    //   path: '/menu_section/pescados',
    //   name: 'pescados',
    //   component: Pescados
    // },

    {
      path: '/menu_section/addProduct',
      name: 'addProduct',
      component: AddProduct
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
