import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'MENUITEMS.MENU.TEXT',
    isTitle: true
  },
  {
    id: 2000,
    label: 'Mantenimientos',
    icon: 'ri-dashboard-2-line',
    subItems: [

      {
        id: 8,
        label: 'Clientes',
        link: '/clientes',
        parentId: 2,
      },
      {
        id: 9,
        label: 'Consultorios',
        link: '/consultorios',
        parentId: 2,
      },
      {
        id: 10,
        label: 'Abogados',
        link: '/abogados',
        parentId: 2,
      },

      {
        id: 11,
        label: 'Casos',
        link: '/casos',
        parentId: 2,
      },
      {
        id: 12,
        label: 'Tareas',
        link: '/tareas',
        parentId: 2
      },
      {
        id: 13,
        label: 'Contactos',
        link: '/contactosclientes',
        parentId: 2
      }
    ]
  },
  {
    id: 8,
    label: 'MENUITEMS.APPS.TEXT',
    icon: 'bx bx-layer',
    subItems: [
      {
        id: 9,
        label: 'MENUITEMS.APPS.LIST.CALENDAR',
        link: '/calendar',
        parentId: 8
      },
      {
        id: 10,
        label: 'MENUITEMS.APPS.LIST.CHAT',
        link: '/chat',
        parentId: 8
      },
      {
        id: 11,
        label: 'MENUITEMS.APPS.LIST.EMAIL',
        parentId: 8,
        subItems: [
          {
            id: 13,
            label: 'MENUITEMS.APPS.LIST.MAILBOX',
            link: '/mailbox',
            parentId: 11
          },
          {
            id: 14,
            label: 'MENUITEMS.APPS.LIST.MAILTEMPLATES',
            parentId: 11,
            subItems: [
              {
                id: 13,
                label: 'MENUITEMS.APPS.LIST.BASICACTION',
                link: '/email-basic',
                parentId: 14
              },
              {
                id: 13,
                label: 'MENUITEMS.APPS.LIST.ECOMMERCEACTION',
                link: '/email-ecommerce',
                parentId: 14
              },
            ]
          }
        ]
      },
    ]
  }

  ,

  {
    id: 82,
    label: 'MENUITEMS.PAGES.TEXT',
    icon: 'ri-pages-line',
    subItems: [
      {
        id: 83,
        label: 'MENUITEMS.PAGES.LIST.STARTER',
        link: '/pages/starter',
        parentId: 82
      },
      {
        id: 84,
        label: 'MENUITEMS.PAGES.LIST.PROFILE',
        parentId: 82,
        subItems: [
          {
            id: 85,
            label: 'MENUITEMS.PAGES.LIST.SIMPLEPAGE',
            link: '/pages/profile',
            parentId: 84
          },
          {
            id: 86,
            label: 'MENUITEMS.PAGES.LIST.SETTINGS',
            link: '/pages/profile-setting',
            parentId: 84
          },
        ]
      },
      {
        id: 87,
        label: 'MENUITEMS.PAGES.LIST.TEAM',
        link: '/pages/team',
        parentId: 82
      },
      {
        id: 88,
        label: 'MENUITEMS.PAGES.LIST.TIMELINE',
        link: '/pages/timeline',
        parentId: 82
      },
      {
        id: 89,
        label: 'MENUITEMS.PAGES.LIST.FAQS',
        link: '/pages/faqs',
        parentId: 82
      },
      {
        id: 90,
        label: 'MENUITEMS.PAGES.LIST.PRICING',
        link: '/pages/pricing',
        parentId: 82
      },
      {
        id: 91,
        label: 'MENUITEMS.PAGES.LIST.GALLERY',
        link: '/pages/gallery',
        parentId: 82
      },
      {
        id: 92,
        label: 'MENUITEMS.PAGES.LIST.MAINTENANCE',
        link: '/pages/maintenance',
        parentId: 82
      },
      {
        id: 93,
        label: 'MENUITEMS.PAGES.LIST.COMINGSOON',
        link: '/pages/coming-soon',
        parentId: 82
      },
      {
        id: 94,
        label: 'MENUITEMS.PAGES.LIST.SITEMAP',
        link: '/pages/sitemap',
        parentId: 82
      },
      {
        id: 95,
        label: 'MENUITEMS.PAGES.LIST.SEARCHRESULTS',
        link: '/pages/search-results',
        parentId: 82
      },
      {
        id: 96,
        label: 'MENUITEMS.PAGES.LIST.PRIVACYPOLICY',
        link: '/pages/privacy-policy',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.DASHBOARD.BADGE',
        },
        parentId: 82
      },
      {
        id: 97,
        label: 'MENUITEMS.PAGES.LIST.TERMS&CONDITIONS',
        link: '/pages/terms-condition',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.DASHBOARD.BADGE',
        },
        parentId: 82
      }
    ]
  },
  {
    id: 131,
    label: 'MENUITEMS.LANDING.TEXT',
    icon: 'ri-rocket-line',
    subItems: [
      {
        id: 85,
        label: 'MENUITEMS.LANDING.LIST.ONEPAGE',
        link: '/landing',
        parentId: 84
      },
      {
        id: 86,
        label: 'MENUITEMS.LANDING.LIST.NFTLANDING',
        link: '/landing/nft',
        parentId: 84,
      },
      {
        id: 87,
        label: 'MENUITEMS.LANDING.LIST.JOB',
        link: '/landing/job',
        badge: {
          variant: 'bg-success',
          text: 'MENUITEMS.DASHBOARD.BADGE',
        },
        parentId: 84,
      },
    ]
  },
  {
    id: 96,
    label: 'MENUITEMS.COMPONENTS.TEXT',
    isTitle: true
  },
  {
    id: 97,
    label: 'MENUITEMS.BASEUI.TEXT',
    icon: 'ri-pencil-ruler-2-line',
    subItems: [
      {
        id: 98,
        label: 'MENUITEMS.BASEUI.LIST.ALERTS',
        link: '/ui/alerts',
        parentId: 97
      },
      {
        id: 99,
        label: 'MENUITEMS.BASEUI.LIST.BADGES',
        link: '/ui/badges',
        parentId: 97
      },
      {
        id: 100,
        label: 'MENUITEMS.BASEUI.LIST.BUTTONS',
        link: '/ui/buttons',
        parentId: 97
      },
      {
        id: 101,
        label: 'MENUITEMS.BASEUI.LIST.COLORS',
        link: '/ui/colors',
        parentId: 97
      },
      {
        id: 102,
        label: 'MENUITEMS.BASEUI.LIST.CARDS',
        link: '/ui/cards',
        parentId: 97
      },
      {
        id: 103,
        label: 'MENUITEMS.BASEUI.LIST.CAROUSEL',
        link: '/ui/carousel',
        parentId: 97
      },
      {
        id: 104,
        label: 'MENUITEMS.BASEUI.LIST.DROPDOWNS',
        link: '/ui/dropdowns',
        parentId: 97
      },
      {
        id: 105,
        label: 'MENUITEMS.BASEUI.LIST.GRID',
        link: '/ui/grid',
        parentId: 97
      },
      {
        id: 106,
        label: 'MENUITEMS.BASEUI.LIST.IMAGES',
        link: '/ui/images',
        parentId: 97
      },
      {
        id: 107,
        label: 'MENUITEMS.BASEUI.LIST.TABS',
        link: '/ui/tabs',
        parentId: 97
      },
      {
        id: 108,
        label: 'MENUITEMS.BASEUI.LIST.ACCORDION&COLLAPSE',
        link: '/ui/accordions',
        parentId: 97
      },
      {
        id: 109,
        label: 'MENUITEMS.BASEUI.LIST.MODALS',
        link: '/ui/modals',
        parentId: 97
      },
      {
        id: 111,
        label: 'MENUITEMS.BASEUI.LIST.PLACEHOLDERS',
        link: '/ui/placeholder',
        parentId: 97
      },
      {
        id: 112,
        label: 'MENUITEMS.BASEUI.LIST.PROGRESS',
        link: '/ui/progress',
        parentId: 97
      },
      {
        id: 113,
        label: 'MENUITEMS.BASEUI.LIST.NOTIFICATIONS',
        link: '/ui/notifications',
        parentId: 97
      },
      {
        id: 114,
        label: 'MENUITEMS.BASEUI.LIST.MEDIAOBJECT',
        link: '/ui/media',
        parentId: 97
      },
      {
        id: 115,
        label: 'MENUITEMS.BASEUI.LIST.EMBEDVIDEO',
        link: '/ui/video',
        parentId: 97
      },
      {
        id: 116,
        label: 'MENUITEMS.BASEUI.LIST.TYPOGRAPHY',
        link: '/ui/typography',
        parentId: 97
      },
      {
        id: 117,
        label: 'MENUITEMS.BASEUI.LIST.LISTS',
        link: '/ui/list',
        parentId: 97
      },
      {
        id: 118,
        label: 'MENUITEMS.BASEUI.LIST.GENERAL',
        link: '/ui/general',
        parentId: 97
      },
      {
        id: 119,
        label: 'MENUITEMS.BASEUI.LIST.RIBBONS',
        link: '/ui/ribbons',
        parentId: 97
      },
      {
        id: 120,
        label: 'MENUITEMS.BASEUI.LIST.UTILITIES',
        link: '/ui/utilities',
        parentId: 97
      }
    ]
  },
  {
    id: 121,
    label: 'MENUITEMS.ADVANCEUI.TEXT',
    icon: 'ri-stack-line',
    subItems: [
      {
        id: 122,
        label: 'MENUITEMS.ADVANCEUI.LIST.SWEETALERTS',
        link: '/advance-ui/sweetalerts',
        parentId: 121
      },
      {
        id: 124,
        label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLBAR',
        link: '/advance-ui/scrollbar',
        parentId: 121
      },
      {
        id: 125,
        label: 'MENUITEMS.ADVANCEUI.LIST.ANIMATION',
        link: '/advance-ui/animation',
        parentId: 121
      },
      {
        id: 126,
        label: 'MENUITEMS.ADVANCEUI.LIST.TOUR',
        link: '/advance-ui/tour',
        parentId: 121
      },
      {
        id: 127,
        label: 'MENUITEMS.ADVANCEUI.LIST.SWIPERSLIDER',
        link: '/advance-ui/swiper',
        parentId: 121
      },
      {
        id: 128,
        label: 'MENUITEMS.ADVANCEUI.LIST.RATTINGS',
        link: '/advance-ui/ratings',
        parentId: 121
      },
      {
        id: 129,
        label: 'MENUITEMS.ADVANCEUI.LIST.HIGHLIGHT',
        link: '/advance-ui/highlight',
        parentId: 121
      },
      {
        id: 130,
        label: 'MENUITEMS.ADVANCEUI.LIST.SCROLLSPY',
        link: '/advance-ui/scrollspy',
        parentId: 121
      }
    ]
  },
  {
    id: 131,
    label: 'MENUITEMS.WIDGETS.TEXT',
    icon: 'ri-honour-line',
    link: '/widgets'
  },
  {
    id: 132,
    label: 'MENUITEMS.FORMS.TEXT',
    icon: 'ri-file-list-3-line',
    subItems: [
      {
        id: 133,
        label: 'MENUITEMS.FORMS.LIST.BASICELEMENTS',
        link: '/forms/basic',
        parentId: 132
      },
      {
        id: 134,
        label: 'MENUITEMS.FORMS.LIST.FORMSELECT',
        link: '/forms/select',
        parentId: 132
      },
      {
        id: 135,
        label: 'MENUITEMS.FORMS.LIST.CHECKBOXS&RADIOS',
        link: '/forms/checkboxs-radios',
        parentId: 132
      },
      {
        id: 136,
        label: 'MENUITEMS.FORMS.LIST.PICKERS',
        link: '/forms/pickers',
        parentId: 132
      },
      {
        id: 137,
        label: 'MENUITEMS.FORMS.LIST.INPUTMASKS',
        link: '/forms/masks',
        parentId: 132
      },
      {
        id: 138,
        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
        link: '/forms/advanced',
        parentId: 132
      },
      {
        id: 139,
        label: 'MENUITEMS.FORMS.LIST.RANGESLIDER',
        link: '/forms/range-sliders',
        parentId: 132
      },
      {
        id: 140,
        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
        link: '/forms/validation',
        parentId: 132
      },
      {
        id: 141,
        label: 'MENUITEMS.FORMS.LIST.WIZARD',
        link: '/forms/wizard',
        parentId: 132
      },
      {
        id: 142,
        label: 'MENUITEMS.FORMS.LIST.EDITORS',
        link: '/forms/editors',
        parentId: 132
      },
      {
        id: 143,
        label: 'MENUITEMS.FORMS.LIST.FILEUPLOADS',
        link: '/forms/file-uploads',
        parentId: 132
      },
      {
        id: 144,
        label: 'MENUITEMS.FORMS.LIST.FORMLAYOUTS',
        link: '/forms/layouts',
        parentId: 132
      }
    ]
  },
  {
    id: 145,
    label: 'MENUITEMS.TABLES.TEXT',
    icon: 'ri-layout-grid-line',
    subItems: [
      {
        id: 146,
        label: 'MENUITEMS.TABLES.LIST.BASICTABLES',
        link: '/tables/basic',
        parentId: 145
      },
      {
        id: 147,
        label: 'MENUITEMS.TABLES.LIST.GRIDJS',
        link: '/tables/gridjs',
        parentId: 145
      },
      {
        id: 148,
        label: 'MENUITEMS.TABLES.LIST.LISTJS',
        link: '/tables/listjs',
        parentId: 145
      }
    ]
  },
  {
    id: 149,
    label: 'MENUITEMS.CHARTS.TEXT',
    icon: 'ri-pie-chart-line',
    subItems: [
      {
        id: 150,
        label: 'MENUITEMS.CHARTS.LIST.APEXCHARTS',
        parentId: 149,
        subItems: [
          {
            id: 151,
            label: 'MENUITEMS.CHARTS.LIST.LINE',
            link: '/charts/apex-line',
            parentId: 150
          },
          {
            id: 152,
            label: 'MENUITEMS.CHARTS.LIST.AREA',
            link: '/charts/apex-area',
            parentId: 150
          },
          {
            id: 153,
            label: 'MENUITEMS.CHARTS.LIST.COLUMN',
            link: '/charts/apex-column',
            parentId: 150
          },
          {
            id: 154,
            label: 'MENUITEMS.CHARTS.LIST.BAR',
            link: '/charts/apex-bar',
            parentId: 150
          },
          {
            id: 155,
            label: 'MENUITEMS.CHARTS.LIST.MIXED',
            link: '/charts/apex-mixed',
            parentId: 150
          },
          {
            id: 156,
            label: 'MENUITEMS.CHARTS.LIST.TIMELINE',
            link: '/charts/apex-timeline',
            parentId: 150
          },
          {
            id: 157,
            label: 'MENUITEMS.CHARTS.LIST.CANDLSTICK',
            link: '/charts/apex-candlestick',
            parentId: 150
          },
          {
            id: 158,
            label: 'MENUITEMS.CHARTS.LIST.BOXPLOT',
            link: '/charts/apex-boxplot',
            parentId: 150
          },
          {
            id: 159,
            label: 'MENUITEMS.CHARTS.LIST.BUBBLE',
            link: '/charts/apex-bubble',
            parentId: 150
          },
          {
            id: 160,
            label: 'MENUITEMS.CHARTS.LIST.SCATTER',
            link: '/charts/apex-scatter',
            parentId: 150
          },
          {
            id: 161,
            label: 'MENUITEMS.CHARTS.LIST.HEATMAP',
            link: '/charts/apex-heatmap',
            parentId: 150
          },
          {
            id: 162,
            label: 'MENUITEMS.CHARTS.LIST.TREEMAP',
            link: '/charts/apex-treemap',
            parentId: 150
          },
          {
            id: 163,
            label: 'MENUITEMS.CHARTS.LIST.PIE',
            link: '/charts/apex-pie',
            parentId: 150
          },
          {
            id: 164,
            label: 'MENUITEMS.CHARTS.LIST.RADIALBAR',
            link: '/charts/apex-radialbar',
            parentId: 150
          },
          {
            id: 165,
            label: 'MENUITEMS.CHARTS.LIST.RADAR',
            link: '/charts/apex-radar',
            parentId: 150
          },
          {
            id: 166,
            label: 'MENUITEMS.CHARTS.LIST.POLARAREA',
            link: '/charts/apex-polar',
            parentId: 150
          },
        ]
      },
      {
        id: 167,
        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
        link: '/charts/chartjs',
        parentId: 149
      },
      {
        id: 168,
        label: 'MENUITEMS.CHARTS.LIST.ECHARTS',
        link: '/charts/echarts',
        parentId: 149
      }
    ]
  },
  {
    id: 169,
    label: 'MENUITEMS.ICONS.TEXT',
    icon: 'ri-compasses-2-line',
    subItems: [
      {
        id: 170,
        label: 'MENUITEMS.ICONS.LIST.REMIX',
        link: '/icons/remix',
        parentId: 169
      },
      {
        id: 171,
        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
        link: '/icons/boxicons',
        parentId: 169
      },
      {
        id: 172,
        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
        link: '/icons/materialdesign',
        parentId: 169
      },
      {
        id: 173,
        label: 'MENUITEMS.ICONS.LIST.LINEAWESOME',
        link: '/icons/lineawesome',
        parentId: 169
      },
      {
        id: 174,
        label: 'MENUITEMS.ICONS.LIST.FEATHER',
        link: '/icons/feather',
        parentId: 169
      },
      {
        id: 174,
        label: 'MENUITEMS.ICONS.LIST.CRYPTOSVG',
        link: '/icons/icons-crypto',
        parentId: 169,
      },
    ]
  },



];
