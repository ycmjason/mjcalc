<template>
  <div>
    <div @click="trigger">
      <slot name="trigger" />
    </div>
    <div class="modal" :class="{ 'modal-show': show }" @click="close">
      <div class="modal_card" @click.stop>
        <slot />
      </div>
    </div>
  </div>
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
    trigger () {
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
  padding: 1rem;
  border-radius: 5px;
  position: absolute;
  top: 5%;
  max-width: 80vw;
}
</style>
