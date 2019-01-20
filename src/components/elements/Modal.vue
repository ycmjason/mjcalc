<template>
  <span>
    <span @click="open">
      <slot name="trigger" />
    </span>
    <div class="modal" :class="{ 'modal-show': show }" @click="close">
      <div class="modal_card" @click.stop>
        <mj-icon class="modal_card_close" @click="close">close</mj-icon>
        <slot />
      </div>
    </div>
  </span>
</template>

<script>
const fixBodyScroll = () => {
  const {
    height,
    width,
    overflowY,
    overscrollBehaviorY,
  } = document.body.style;

  Object.assign(document.body.style, {
    height: '100%',
    width: '100%',
    overflowY: 'hidden',
    overscrollBehaviorY: 'none',
  });

  return () => {
    Object.assign(document.body.style, {
      height,
      width,
      overflowY,
      overscrollBehaviorY,
    });
  };
};

export default {
  data: () => ({
    show: false,
    unfixBodyScroll: () => {},
  }),

  methods: {
    open () {
      this.show = true;
      this.unfixBodyScroll = fixBodyScroll();
    },
    close () {
      this.show = false;
      this.unfixBodyScroll();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/scss/config.scss';

.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;

  transition-property: opacity, visibility;
  transition-duration: $transition-duration, 0s;
  transition-delay: 0s, $transition-duration;
  opacity: 0;
  visibility: hidden;

  &-show {
    opacity: 1;
    visibility: visible;
    transition-delay: 0s;
  }
}

.modal_card {
  background: #ffffff;
  border-radius: 5px;
  position: absolute;
  top: 5%;
  max-width: 80vw;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  max-height: 90vh;
  overflow-y: auto;
}

.modal_card_close {
  position: absolute;
  top: 0rem;
  right: 0rem;
  border-radius: 999px;
  background: white;
  margin: 0.3rem;
  cursor: pointer;
}
</style>
