import Vue from 'vue'
import Router from 'vue-router'
import homepage from '@/views/homepage'
import Foundthatmusic from '@/views/Foundthatmusic/index'
import PrivateFM from '@/views/PrivateFM'
import videoMV from '@/views/videoMV'
import Looklive from '@/views/Looklive'
import Localmusic from '@/views/Localmusic'
import Afriend from '@/views/Afriend'
import Downloadmanager from '@/views/Downloadmanager'
import playlist from '@/views/Foundthatmusic/playlist/index'
import singer from '@/views/Foundthatmusic/singer'
import thehost from '@/views/Foundthatmusic/thehost'
import thelatest from '@/views/Foundthatmusic/thelatest'
import ranking from '@/views/Foundthatmusic/ranking'
import personality from '@/views/Foundthatmusic/personality/index'
import recommendsongs from '@/views/Foundthatmusic/personality/recommendsongs'






Vue.use(Router)

export default new Router({
  routes: [
   //个性推荐
    {
      path:'/',
      name:'Foundthatmusic',
      component: Foundthatmusic,
      children:[
        {
          path:'/',//个性推荐
          name:'personality',
          component: personality
        },
        {
          path:'playlist',//歌单
          name:'playlist',
          component: playlist
        },
        {
          path:'ranking',//排行榜
          name:'ranking',
          component: ranking
        },
        {
          path:'singer',//歌手
          name:'singer',
          component: singer
        },
        {
          path:'thehost',//主播电台
          name:'thehost',
          component: thehost
        },
        {
          path:'thelatest',//最新音乐
          name:'thelatest',
          component: thelatest
        }

      ]
    },
    //朋友
    {
      path: '/Afriend',
      name: 'Afriend',
      component: Afriend
    },
   //下载管理
    {
      path: '/Downloadmanager',
      name: 'Downloadmanager',
      component: Downloadmanager
    },
    //本地音乐
    {
      path: '/Localmusic',
      name: 'Localmusic',
      component: Localmusic
    },
    //LOOk直播
    {
      path: '/Looklive',
      name: 'Looklive',
      component: Looklive
    },
    //视频
    {
      path: '/videoMV',
      name: 'videoMV',
      component: videoMV
    },
    //私人FM
    {
      path: '/PrivateFM',
      name: 'PrivateFM',
      component: PrivateFM
    },
    {
      path:'/recommendsongs',//最新音乐
      name:'recommendsongs',
      component: recommendsongs
    },
    //无
    {
      path: '/homepage',
      name: 'homepage',
      component: homepage
    }
  ]
})
