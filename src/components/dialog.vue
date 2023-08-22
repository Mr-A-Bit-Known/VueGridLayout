<template>
  <div class="wrapper">
    <el-dialog
      :title="title"
      :width="width"
      :top="top"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :modal-append-to-body="false"
    >
      <slot></slot>
      <div slot="footer">
        <el-button size="mini" @click="handleClose">取消</el-button>
        <el-button type="primary" size="mini" @click="handle">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "MsDialog",
  data() {
    return {
      dialogVisible: this.visible
    };
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "默认标题"
    },
    width: {
      type: String,
      default: "40%"
    },
    top: {
      type: String,
      default: "10vh"
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
    },
    handle() {
      this.$emit("handle");
      this.dialogVisible = false;
    }
  }
};
</script>

<style scoped>
.wrapper .el-dialog__body {
  padding: 0px 20px !important;
}
</style>