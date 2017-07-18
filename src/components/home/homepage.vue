<template>
<div class="event-outer-box">
<v-alert error v-bind:value="true" class="event-application-true">Closes in 3 days</v-alert>
<div class="event-middle-box">
<div class="event-inner-box">
aa
</div>
<div class="event-more-info">
More info
</div>
</div>

</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to the new ESTIEM'
    }
  }
}
</script>

<style>
.event-outer-box {
	background-color: gray;
}

.event-more-info {
  background-color: green;
}

.event-application-close {
  background-color: red;
  width: 100px;
}

.event-middle-box {
  background-color: white;
  margin-left: 5%;
  margin-right: 5%
}

.event-inner-box {
  display: flex;
}
</style>