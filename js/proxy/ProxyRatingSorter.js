class ProxyRatingSorter {
    constructor() {
        this.cache = []
    }

    async sorter(movies, orderBy) {
        const cachedData = this.cache.find(element => element.key === orderBy)

        if(cachedData){
            console.log('Get from cash')
            return cachedData
        }
        
        const data = await RatingSorterApi.sorter(movies, orderBy)

        this.cache.push(data)
        return data
    }
}
