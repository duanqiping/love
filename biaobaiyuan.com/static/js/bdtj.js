//baidutongji-love
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?95cceda5c630eda8a1cc8e000b3a93e0";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

function copyText() {
      var text = document.getElementById("text").innerText;
      var input = document.getElementById("input");
      input.value = text;
      input.select();
      document.execCommand("copy");
      alert("链接复制成功");
    }