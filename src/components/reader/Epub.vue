<template>
    <div
        class="read-epub"
        id="read-epub"
        v-loading="book === null || !book.isOpen"
        element-loading-text="正在加载书籍"
        element-loading-background="rgba(255, 255, 255, 0.3)"
    ></div>
</template>

<script>
import ePub from "epubjs";
// global.ePub = Epub
export default {
    name: "Epub",
    components: {
        // HelloWorld
    },
    mounted() {
        this.showEpub();
    },
    data() {
        return {
            book: null,
            bigTitle: "",
            chapterName: "",
            chapterIntro: "",
            content: [],
            sayBody: "",
            novelid: 0,
            chapterid: 1,
            position: 0,
            origin: "jj",
            novelname: "",
            novelauthor: ""
        };
    },
    computed: {
        isName() {
            return false;
        }
    },
    methods: {
        handleClickNext() {
            if (this.stillLoadingPreventKey) {
                return false;
            }
            this.goToNextChapter();
        },
        handleClickPrev() {
            if (this.stillLoadingPreventKey) {
                return false;
            }
            this.goToPrevChapter();
        },
        goToNextChapter() {
            this.currentChapterid = this.chapterid;
            this.chapterid = parseInt(this.chapterid) + 1;
            // this.getChapter(true)
            // 滚动回到最顶端
            this.position = 0;
            console.log("next");
        },
        goToPrevChapter() {
            if (parseInt(this.chapterid) === 0) {
                return false;
            }
            this.currentChapterid = this.chapterid;
            this.chapterid = parseInt(this.chapterid) - 1;
            // this.getChapter(true)
            console.log("prev");
        },
        showEpub() {
            // 生成book对象
            console.log(this.book);
            this.book = new ePub(
                "https://lg-bus1kzl6-1251693677.cos.ap-shanghai.myqcloud.com/res/test.epub"
            );
            console.log(this.book);
            // 生成rendition对象
            this.rendition = this.book.renderTo("read-epub", {
                method: "default",
                width: window.innerWidth,
                height: window.innerHeight,
                flow: "scrolled-doc"
            });
            // 通过rendition.display渲染电子书
            this.rendition.display();
        }
    }
};
</script>

<style scoped lang="scss">
.read-epub {
    width: 100vw;
    height: 100vh;
}
</style>
