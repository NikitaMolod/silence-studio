new Vue({
    el: '#app',
    data: {
        currentTab: 0,
        intervalTime: 5000,
        interval: '',
        scrollFromTop: 0,
        shopCount: 0,
        windowWidth: 0,
        menuOpen: false,
        tabs: [
            { title: 'Одностраничный сайт', icon: 'file' },
            { title: 'Лендинг', icon: 'file-alt' },
            { title: 'Многостраничный сайт', icon: 'copy' },
            { title: 'Магазин', icon: 'shopping-bag' },
        ],
        steps: [
            { icon: 'assets/svg_consultation/001-operator.svg', title: 'Консультация', description: 'Our uniqueness is in the first quality of the product, stability of work, as well as 2 design management systems that will only be pleasant when working with the product. Favorable use - we see it so that users when working with a product can easily use it to the maximum and enjoy it without unnecessary confusion buttons.', active: false },
            { icon: 'assets/svg_payment/001-credit-card.svg', title: 'Предоплата', description: 'sample text', active: false },
            { icon: 'assets/svg_development/002-gamer.svg', title: 'Разработка', description: 'sample text', active: false },
            { icon: 'assets/svg_edit/001-graphic-design-1.svg', title: 'Правки', description: 'sample text', active: false },
            { icon: 'assets/svg_promotion/001-loudspeaker.svg', title: 'Продвижение', description: 'sample text', active: false },
        ],
        siteName: "PerfectSite",
        titleName: "Создай свой уникальный сайт",
        pagesOn: false,
        shopOn: false,
        socialOn: false,
        gradientOn: false,
        activeIcon: 'warehouse-alt',
        icons: [
            "adjust", "album", "bahai", "bags-shopping"
        ],
        websiteMiniTabs: [
            "Главная", "О нас"

        ],
        refresh: false,



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
        doRefresh() {
            this.refresh = true;
            setTimeout(() => this.refresh = false, 1500)
            this.pagesOn = false;
            this.shopOn = false;
            this.socialOn = false;
            this.gradientOn = false;
        },
        add(site) {
            let sites = localStorage.getItem('sites');
            if (!sites) sites = {};
            else sites = JSON.parse(sites)
            if (site) sites[site] = true;
            localStorage.setItem('sites', JSON.stringify(sites));
            this.shopCount = Object.keys(sites).map(key => sites[key]).length;
        },
        remove() {
            localStorage.removeItem('sites')
            this.add()
        },
        check() {
            console.log(this.$route)
        }
    },
    created() {
        this.startInterval();
        window.addEventListener('scroll', this.scrollHandler);
        this.add();
        this.windowWidth = window.innerWidth;
    },
    watch: {
        currentTab() {
            this.startInterval();
        }
    }
})