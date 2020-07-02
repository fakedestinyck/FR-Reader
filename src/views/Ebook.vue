<template>
    <div class="m-reader">
        <div
            class="read-wrapper"
        >
            <epub ref="epubComponent"></epub>
        </div>
    </div>
</template>

<script>
import Epub from '../components/reader/Epub.vue'
export default {
    name: 'Ebook',
    components: {
        Epub
    },
    data() {
        return {
            touchStartPoint: 0
        };
    },
    computed: {
        isName() {
            return false;
        }
    },
    methods: {
        handleKeyDown(e) {
            console.log(e)
            // ← 37， →39
            if (e.keyCode === 37) {
                // console.log('prevKey')
                this.$refs.epubComponent.handleClickPrev()
            } else if (e.keyCode === 39) {
                // console.log('nextKey')
                this.$refs.epubComponent.handleClickNext()
            }
        },
        toggleTitleAndMenu() {
            // this.showTitleBarAndMenuBar = !this.showTitleBarAndMenuBar
        },
        readWrapperClickStart: function(event) {
            event.stopPropagation();
            // 获得起点X坐标，初始化distance为0
            this.touchStartPoint = event.pageX
        },
        readWrapperTouchEnd: function(event) {
            let touchEndPosition = event.pageX
            if (touchEndPosition - this.touchStartPoint <= -50) {
                // console.log("swipe left")
                this.$refs.epubComponent.handleClickNext()
            } else if (touchEndPosition - this.touchStartPoint >= 50) {
                // console.log("swipe right")
                this.$refs.epubComponent.handleClickPrev()
            } else {
                // 拖动距离不足50 认为是在点击
                this.toggleTitleAndMenu()
            }
        },
        name() {}
    }
};
</script>

<style scoped lang="scss">
.ebook {
    position: relative;
}
.read-wrapper {
    background-color: rgb(242, 232, 210);
}
</style>