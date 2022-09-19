<template>
    <div class="homepageWrapper">
        <el-container>
            <el-header :style="{ height: this.header_style + 'px' }">
                <div></div>
            </el-header>
            <el-main :style="{ height: this.screenHeight + 'px' }">
                <div class="searchWrapper">
                    <div class="searchInput">
                        <el-input  ref="input" @keydown.enter.native="searchBatchCode" v-model="inputValueChange" class="searchInputStyle" placeholder="请输入对应的组装批次搜索程序..." />
                    </div>
                    <div class="confirmBtn">
                        <el-button class="confirmBtnStyle" @click="searchBatchCode" type="primary">确认搜索</el-button>
                    </div>
                </div>
                <div class="containerWrapper">
                    <el-card>
                        <el-empty description="oh,你要找的东西不见了"></el-empty>
                    </el-card>
                </div>
            </el-main>
            <el-footer :style="{ height: this.footer_style + 'px' }">
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Footer from '../components/footer.vue'
export default {
    data() {
        return {
            // 组件高度
            header_style: 100,
            footer_style: 30,
            // mian动态高度
            screenHeight: "",
            // 输入框内容
            form: {
                inputValue: ""
            }
        };
    },
    components: { Footer },

    methods: {
        // 获取屏幕高度信息
        getViewHeight() {
            const screenHeight = this.$getViewSize().height - (this.header_style + this.footer_style);
            this.screenHeight = screenHeight;
        },
        // 搜索组装批
        searchBatchCode() {
            if (this.form.inputValue == "") {
                if (document.getElementsByClassName('el-message').length > 1) return;
                this.$message({
                    message: "输入内容为空,请重新输入",
                    type: "error",
                    center: true,
                    duration: 1000
                })
                return;
            } else {
                this.$nextTick(() => {
                    this.$refs.input.blur()
                })
                if (document.getElementsByClassName('el-message').length > 1) return;
                this.$message({
                    message: "Success",
                    type: "success",
                    center: true,
                    duration: 1000
                });
                console.log(this.form.inputValue);
            }
        }
    },
    // 输入框内容自动转化为大写
    computed: {
        'inputValueChange': {
            get: function () {
                return this.form.inputValue;
            },
            set: function (val) {
                this.form.inputValue = val.toUpperCase();
            }
        }
    },
    mounted() {
        this.getViewHeight();
        window.addEventListener("resize", this.getViewHeight);
    },
    destroyed() {
        window.removeEventListener("resize", this.getViewHeight, false);
    },
}
</script>

<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
}

.el-main {
    width: 100%;
    background-color: #E9EEF3;
    color: #333;
    display: flex;
    flex-direction: column;
}

.el-footer {
    background-color: #B3C0D1;
    color: #333;
    display: flex;
    justify-content: center;
    align-items: center;
}

.searchWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 120px;
}

.searchInputStyle>>>.el-input__inner {
    width: 800px;
    border-radius: 0px;
    text-align: center;
}

.confirmBtn>>>.el-button {
    border-radius: 0px;
    width: 100px;
}

.containerWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.containerWrapper>>>.el-card {
    width: 1400px;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>