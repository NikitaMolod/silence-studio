new Vue({
    el: '#app',
    data: {
        currentTab: 0,
        intervalTime: 5000,
        interval: '',
        scrollFromTop: 0,
        shopCount:0,
        tabs: [
            { title: 'Одностраничный сайт', icon: 'file' },
            { title: 'Лендинг', icon: 'file-alt' },
            { title: 'Многостраничный сайт', icon: 'copy' },
            { title: 'Магазин', icon: 'shopping-bag' },
        ]
    },
    methods: {
        startInterval() {
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                if (this.currentTab >= this.tabs.length - 1) this.currentTab = 0;
                else this.currentTab++
            }, this.intervalTime)
        },
        scrollHandler(e) {
            this.scrollFromTop = window.scrollY
        },
        add(site){
            let sites = localStorage.getItem('sites');
            if(!sites)sites={};
            else sites = JSON.parse(sites)
            if(site)sites[site]=true;
            localStorage.setItem('sites',JSON.stringify(sites));
            this.shopCount = Object.keys(sites).map(key=>sites[key]).length;
        },
        remove(){
            localStorage.removeItem('sites')
            this.add()
        }
    },
    created() {
        this.startInterval();
        window.addEventListener('scroll', this.scrollHandler);
        this.add();
    },
    watch: {
        currentTab() {
            this.startInterval();
        }
    }
})