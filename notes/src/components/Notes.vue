<template>
  <div class="notes">
    <div class="note" :class="{full: !grid}" v-for="(note, i) in notes" :key="i">
      <div class="note-header" :class="{full: !grid}">
        <p>{{ note.title }}</p>
        <p style="cursor:pointer;" @click="removeNote(i)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    notes: {
      type: Array,
      required: true,
    },
    grid:{
      type: Boolean,
      required: true
    }
  },
  methods: {
      removeNote(index) {
          this.$emit('remove',index)
      }
  }
};
</script>

<style lang="scss">
.notes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 40px 0;
}
.note {
  width: 46%;
  padding: 20px;
  margin-bottom: 20px;
  background: white;
  transition: transform 300ms;
  &:hover{
    box-shadow: 0 0 30px rgba(0,0,0,0.2);
    transform: translate(0,-6px);
  }
  &.full{
    width: 100%;
    text-align: center;
  }
}
.note-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1{
      font-size: 32px;
    }
    p{
        color: rgb(74, 74, 141);
        font-size: 22px;
    }
    svg{
      margin-right: 12px;
      color: grey;
      &.active{
        color: blue;
      }
      &:last-child{
        margin-right: 0;
      }
    }
    &.full{
      justify-content: center;
      p{
        margin-right: 20px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
}
.note-body {
  p {
      margin: 20px 0;
  }
  span {
      font-size: 14px;
      color: gray;
  }
}
</style>
