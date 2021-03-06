const getters = {

    /*USER*/
    user: state => state.user.user,
    footerBarList: state => state.user.footerBarList,
    isLogin: state => state.user.isLogin,

    /*首页*/
    newsList: state => state.home.newsList,
    newsLoading: state => state.home.newsLoading,
    homeNewsIndex: state => state.home.newsIndex,
    homeNewsPrevIndex: state => state.home.newsPrevIndex,
    homeEnd: state => state.home.end,

    /*APP*/
    articleInfo: state => state.app.articleInfo,
    pageLoading: state => state.app.pageLoading,

    /*video*/
    videoList: state => state.video.list,
    videoLoading: state => state.video.loading,
    videoEnd: state => state.video.end,

    /*search*/
    keyword: state => state.search.keyword,
    searchPageindex: state => state.search.pageindex,
    searchList: state => state.search.list,
    searchLoading: state => state.search.loading,
    searchEnd: state => state.search.end,

    /*headline*/
    headlineList: state => state.headline.list,
    headlineLoading: state => state.headline.loading,
    headlineEnd: state => state.headline.end,

    /*record*/
    recordTypes: state => state.record.types,
    recordIndex: state => state.record.index,
    recordLoading: state => state.record.loading,
    recordEnd: state => state.record.end
}
export default getters