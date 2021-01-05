<template>
  <div class="rank">
    <div class="rank-container">
      <h1>排行</h1>
      <div class="rank-search">
        <span>
        <a class='rank-search-all'>全部排行</a>
        <a>原创</a>
        <a>悬疑</a>
        <a>女性</a>
        <a>幻想</a>
        <a>文艺</a>
        <a>历史</a>
        <a>出版</a>
        </span>
      </div>
      <h2>综合排行</h2>
    </div>
    <div class="lianzaibang">
       <h1>连载榜</h1>
       <h2>作品三日内有更新，按周热度排行</h2>
       <div class="killer">     
         <div class="ranking-number">1</div>   
         <span>薄情人回收手册</span>  
           <a href="https://read.douban.com/author/63766196/"   target="_blank" > 
        <br />
         <span>柳翠虎</span>
      </a>
    <div class="yanqing">
          <br />
        <a href="https://read.douban.com/category?kind=501"   target="_blank">
          <span class="yanqing-on">言情</span>
        </a>
        <span>|</span>
        <a href="https://read.douban.com/tag/%E7%8E%B0%E4%BB%A3%E8%A8%80%E6%83%85/"   target="_blank">
          <span> 现代言情</span>
        </a>
      </div>       
      <div class="ranking-number">2</div>   
        <span>我是这样地爱你</span>  
     </div>  
    </div>
  </div>
</template>
<script>
export default {
    name:''
  };
</script>
<style >
    html,
    body {
      width: 100%;
    }
  .rank {
    width: 100%;
    margin-top: 100px;
  }
  .rank-container {
    width: 1200px;
    margin: 0 auto;
  }
/* h1标签 */
  .rank-container h1 {
    margin: 30px 0;
    font-size: 30px;
    padding: 0 25px;
}
.rank-container h2 {
   padding: 0 25px;
   font-size: 24px;
}
.rank-search {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  color: #ccc;
}
.rank-search span a{
 font-size: 16px;
 padding: 10px 20px;
 cursor: pointer;
}
.rank-search span a:hover{
  color: #333;
}

.rank-search span .rank-search-all{
  font-size: 24px;
  color: #333;
}
.lianzaibang {
  width: 300px;
  height: 500px;
  padding: 0 42px;
  border: #333;
}
.lianzaibang h1{
  margin-top: 55px;
  font-size: 20px;
  color: #BB996D;
}
.lianzaibang h2{
  color: #A6A6A6;
  margin-top: -9px;
  font-size: 10px;
}
.ranking-number{
  float: left;
  width: 15px;
  color: #fa595f;
  height:20px;
  line-height:20px;
}
.killer span{
  font-size: 14px;
}
.killer img{
  width: 80px;
}
.killer img:hover{
  color: #333;
  outline: none;
}
.lianzaibang a{
  font-size: 11px;
  color: #777;
  text-decoration:none;
 
}
.lianzaibang a:hover{
  color:#389eac; 
}
.yanqing{
   font-size: 11px;
   color: #777;
}
.yanqing a{
  padding: 0 15px;
} 
</style>