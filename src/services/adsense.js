/**
 * @file Google Adsense
 * @module plugins/adsense
 * @author Surmon <https://github.com/surmon-china>
 */

import Vue from 'vue'
import Ads from 'vue-google-adsense'
// import GoogleAdsense from '/@/components/common/adsense'

Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)
Vue.use(Ads.AutoAdsense, { adClient: 'ca-pub-4710915636313788' })

// Vue.use(GoogleAdsense)
