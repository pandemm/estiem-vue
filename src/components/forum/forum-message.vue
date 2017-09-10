<template>
    <div class="comment">
<div id="ctl02_ctl00_forum_ctl02_MessageList_DisplayPost1_0_MessagePost1_0">Hey everyone,<br><br>Listening to some random songs on Youtube, I found songs that are similar to ESTIEM songs. So I started wondering, what are the original songs for other songs that we have in the ESTIEM songbook?<br><br>For example, I found these similar songs:<br><br><div class="quote"><span class="quotetitle">Quote:</span><div class="innerquote">I met the girl the other day = The Irish Rovers- Johnny I hardly knew ye<br></div></div><br><a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=wFUTHcjiZGo" title="https://www.youtube.com/watch?v=wFUTHcjiZGo">https://www.youtube.com/watch?v=wFUTHcjiZGo</a><br><br><div class="quote"><span class="quotetitle">Quote:</span><div class="innerquote">Drunk ESTIEMER = Drunken Sailer - Irish Rovers<br></div></div><br><a target="_blank" rel="nofollow" href="https://www.youtube.com/watch?v=qGyPuey-1Jw" title="https://www.youtube.com/watch?v=qGyPuey-1Jw">https://www.youtube.com/watch?v=qGyPuey-1Jw</a><br><br>If you find more songs that have similar or its origin songs, feel free to share.<br><br>Looking to relax during exams,<br>In high ESTIEM,<br>Pavle</div>
        <!-- <div class="toggle" :class="{ open }" v-if="comment.kids && comment.kids.length">
          <a @click="open = !open">{{
            open
                ? '[-]'
                : '[+] ' + pluralize(comment.kids.length) + ' collapsed'
          }}</a>
        </div>
        <ul class="comment-children" v-show="open">
          <comment v-for="id in comment.kids" :key="id" :id="id"></comment>
        </ul> -->
    </div>
</template>

<script>
import moment from 'moment';
var BBCodeParser = require('bbcode-parser');
export default {
    data() {
        return {
        }
    },
    props: ['message'],
    filters: {
        formatTimeSpan: function(value) {
            var date = moment();
            var time = moment.duration(date.diff(value));
            return time.humanize();
        }
    },
    computed: {
        content() {
            var parser = new BBCodeParser(BBCodeParser.defaultTags());
            console.log(BBCodeParser.defaultTags)
            var text = parser.parseString(this.message.message);
            console.log(text)
            return text;
        }
    }
}
</script>

<style lang="stylus">
.comment-children
  .comment-children
    margin-left 1.5em
.comment
  border-top 1px solid #eee
  position relative
  .by, .text, .toggle
    font-size .9em
    margin 1em 0
  .by
    color #828282
    a
      color #828282
      text-decoration underline
  .text
    overflow-wrap break-word
    a:hover
      color #ff6600
    pre
      white-space pre-wrap
  .toggle
    background-color #fffbf2
    padding .3em .5em
    border-radius 4px
    a
      color #828282
      cursor pointer
    &.open
      padding 0
      background-color transparent
      margin-bottom -0.5em

.quote 
    padding-left: 16px;
    margin: 5px;
.quotetitle 
    font-weight: bold;

.innerquote
    padding: 4px;
    background-color: #fefefe;
    border: 1px dashed #808080;
</style>