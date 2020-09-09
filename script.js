new Vue({
    el: '#app',
    data: {
        currentTab: 0,
        intervalTime: 5000,
        interval: '',
        tabs: [
            { title: 'Одностраничный сайт', icon: 'file' },
            { title: 'Лендинг', icon: 'file-alt' },
            { title: 'Многостраничный сайт', icon: 'copy' },
            { title: 'Магазин', icon: 'shopping-bag' },
        ]
    },
    methods:{
        startInterval(){
            clearInterval(this.interval)
            this.interval = setInterval(() => {
                if (this.currentTab >= this.tabs.length - 1) this.currentTab = 0;
                else this.currentTab++
            }, this.intervalTime)
        }
    },
    created() {
        this.startInterval()
    },
    watch: {
        currentTab() {
            this.startInterval();
        }
    }
})