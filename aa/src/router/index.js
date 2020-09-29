import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: [{
        path: '/dashboard',
        name: 'dashboard',
        component: resolve => {
            require(['@/components/DashboardPage'], resolve)
        },
        children: [{
                path: 'welcome',
                name: 'welcome',
                component: resolve => {
                    require(['@/components/WelcomePage'], resolve)
                }
            },
            {
                path: 'goods',
                name: 'goods',
                component: resolve => {
                    require(['@/components/Goods/GoodsPage'], resolve)
                }
            },
            {
                path: 'goods/add',
                name: 'goods_add',
                component: resolve => {
                    require(['@/components/Goods/GoodsAddPage'], resolve)
                }
            },
            {
                path: 'nature',
                name: 'nature',
                component: resolve => {
                    require(['@/components/Nature/NaturePage', ], resolve)
                }
            },
            {
                path: 'specification/detail',
                name: 'specification_detail',
                component: resolve => {
                    require(['@/components/Specification/SpecificationAddPage', ], resolve)
                }
            }, {
                path: 'category',
                name: 'category',
                component: resolve => {
                    require(['@/components/Category/CategoryPage', ], resolve)
                }
            }, {
                path: 'category/add',
                name: 'category_add',
                component: resolve => {
                    require(['@/components/Category/CategoryAddPage', ], resolve)
                }
            }, {
                path: 'order',
                name: 'order',
                component: resolve => {
                    require(['@/components/Order/OrderPage', ], resolve)
                }
            }, {
                path: 'order/detail',
                name: 'order_detail',
                component: resolve => {
                    require(['@/components/Order/OrderDetailPage', ], resolve)
                }
            }, {
                path: 'user',
                name: 'user',
                component: resolve => {
                    require(['@/components/User/UserPage', ], resolve)
                }
            }, {
                path: 'user/add',
                name: 'user_add',
                component: resolve => {
                    require(['@/components/User/UserAddPage', ], resolve)
                }
            }, {
                path: 'shipper',
                name: 'shipper',
                component: resolve => {
                    require(['@/components/Shipper/ShipperPage', ], resolve)
                }
            }, {
                path: 'shipper/list',
                name: 'shipper_list',
                component: resolve => {
                    require(['@/components/Shipper/ShipperListPage', ], resolve)
                }
            }, {
                path: 'shipper/add',
                name: 'shipper_add',
                component: resolve => {
                    require(['@/components/Shipper/ShipperAddPage', ], resolve)
                }
            }, {
                path: 'freight',
                name: 'freight',
                component: resolve => {
                    require(['@/components/Freight/FreightPage', ], resolve)
                }
            }, {
                path: 'except_area',
                name: 'except_area',
                component: resolve => {
                    require(['@/components/Freight/ExceptAreaPage', ], resolve)
                }
            }, {
                path: 'except_area/add',
                name: 'except_area_add',
                component: resolve => {
                    require(['@/components/Freight/ExceptAreaAddPage', ], resolve)
                }
            }, {
                path: 'freight/add',
                name: 'freight_add',
                component: resolve => {
                    require(['@/components/Freight/FreightAddPage', ], resolve)
                }
            }, {
                path: 'notice',
                name: 'notice',
                component: resolve => {
                    require(['@/components/Settings/NoticePage', ], resolve)
                }
            }, {
                path: 'ad',
                name: 'ad',
                component: resolve => {
                    require(['@/components/Ad/AdPage', ], resolve)
                }
            }, {
                path: 'ad/add',
                name: 'ad_add',
                component: resolve => {
                    require(['@/components/Ad/AdAddPage', ], resolve)
                }
            }, {
                path: 'shopcart',
                name: 'shopcart',
                component: resolve => {
                    require(['@/components/ShopCart/ShopCartPage', ], resolve)
                }
            }, {
                path: 'keywords',
                name: 'keywords',
                component: resolve => {
                    require(['@/components/Keywords/KeywordsPage', ], resolve)
                }
            }, {
                path: 'keywords/add',
                name: 'keywords_add',
                component: resolve => {
                    require(['@/components/Keywords/KeywordsAddPage', ], resolve)
                }
            }, {
                path: 'goodsgalleryedit',
                name: 'goodsgalleryedit',
                component: resolve => {
                    require(['@/components/GoodsGallery/GoodsGalleryEditPage', ], resolve)
                }
            }, {
                path: 'admin',
                name: 'admin',
                component: resolve => {
                    require(['@/components/Admin/AdminPage', ], resolve)
                }
            }, {
                path: 'admin/add',
                name: 'admin_add',
                component: resolve => {
                    require(['@/components/Admin/AdminAddPage', ], resolve)
                }
            }, {
                path: 'settings/showset',
                name: 'showset',
                component: resolve => {
                    require(['@/components/Showset/ShowSetPage', ], resolve)
                }
            }
        ]
    }, {
        path: '/wap',
        name: 'wap',
        component: resolve => {
            require(['@/components/WapPage', ], resolve)
        },
        children: [{
            path: '/',
            name: 'goods',
            component: resolve => {
                require(['@/components/Wap/GoodsPage', ], resolve)
            }
        }, {
            path: 'order',
            name: 'order',
            component: resolve => {
                require(['@/components/Wap/OrderPage'], resolve)
            }
        }, ]
    }, {
        path: '/login',
        name: 'login',
        component: resolve => {
            require(['@/components/LoginPage.vue'], resolve)
        }
    }, {
        path: '*',
        redirect: '/dashboard'
    }]
})