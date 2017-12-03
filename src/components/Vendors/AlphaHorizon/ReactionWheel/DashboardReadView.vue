<template>
    <div>
      testContent
    </div>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    item: {
      type: [Object, String],
      default: 'x'
    }
  },
  data: function () {
    return {
      alert: true,
      readCardClassValue: '',
      hybridCardClassValue: '',
      writeCardClassValue: '',
      topToolbar: {
        tooltips: {
          active: true
        }
      },
      cardMobileMode: true,
      draggable: true,
      resizable: true
    }
  },
  computed: {
    column () {
      var column = {}

      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        column.row = true
        this.cardMobileMode = false
      } else {
        column.column = true
        this.cardMobileMode = true
      }

      return column
    },
    readCardClass () {
      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        this.readCardClassValue = 'read-card-spacing'
      } else {
        this.readCardClassValue = ''
      }

      return this.readCardClassValue
    },
    hybridCardClass () {
      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        this.hybridCardClassValue = 'hybrid-card-spacing'
      } else {
        this.hybridCardClassValue = ''
      }

      return this.hybridCardClassValue
    },
    writeCardClass () {
      if (this.item.w > 5 && (this.$mq.resize && this.$mq.above('1270px'))) {
        this.writeCardClassValue = 'write-card-spacing'
      } else {
        this.writeCardClassValue = ''
      }

      return this.writeCardClassValue
    }
  },
  methods: {
    removeItem: function (item) {
      this.layout.splice(this.layout.indexOf(item), 1)
    }
  }
}
</script>

<style>
/* Make the cards full height and let the footer section float to the bottom */
.resizable-card-wrapper {
  height: 100% !important;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
/* Center elements in the inner cards section */
.resizable-card-wrapper-section-main {
  flex: 0 1 auto !important;
}
/* Make vue-grid-layout colors uniform */
.vue-grid-item:not(.vue-grid-placeholder) {
  background: transparent;
  border: 0;
}
.vue-grid-layout {
  background: transparent;
}
/* Make the drag handle uniform with the rest of the ui */
.vue-draggable-handle {
  position: absolute;
  width: auto !important;
  height: auto !important;
  top: auto !important;
  height: auto !important;
  background: transparent !important;
  background-position: bottom right;
  padding: 0 !important;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
  right: 0px !important;
}
/* Add spacing to cards on md and up to distinguish cards */
.read-card-spacing {
  margin-right: 8px;
}
.hybrid-card-spacing {
  margin-right: 8px;
  margin-left: 8px;
}
.write-card-spacing {
  margin-left: 8px;
}
/* Fix the card's breadcrumb's spacing */
.first-breadcrumb-item .breadcrumbs__item {
  padding-left: 0;
}
.card-footer-section {
  padding-bottom: 0 !important;
  padding-left: 0 !important;
  padding-right: 2px !important;
}
</style>