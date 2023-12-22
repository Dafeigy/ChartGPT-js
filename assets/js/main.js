// const userInput = document.getElementById("user-input");
// const submitButton = document.getElementById("submit-button");
// const loadingAnimation = document.getElementById("loading-animation");
// const chartContainer = document.getElementById("chart-container");

// // 初始化ECharts实例
// const chart = echarts.init(chartContainer);
// console.log("ECharts initialized.")


// // 自适应Textarea缩放
// var textarea = document.getElementById("user-input");
// textarea.style.height = textarea.scrollHeight + "px";
// textarea.addEventListener("input", function() { 
//     this.style.height = "auto"; 
//     this.style.height = this.scrollHeight + "px"; 
// });
// const optool = {"toolbox": {
//   "show": true,
//   "x": 'center',
//   "y": 'bottom',  
//   "feature": {
//       "dataView": { show: true, readOnly: false },
//       "saveAsImage": {show: true, title: '保存截图', type: 'png'}}},}

// function checkBalance(){
//     document.getElementById("refresh").disabled = true
//     console.log("Checking balance")
//     $.ajax({
//         url:"/balance",
//         type:"get",
//         async: true,
//         timeout: 5000,
//         success:function (data) {
//             document.getElementById('balance').value = `${data} p`
//             document.getElementById("refresh").disabled = false
//             console.log(`${data} p remains.`)
//         },
//         error:function (data) {
//             alert("获取点数失败，请检查token设置")
//             document.getElementById('balance').value = `-0 p`
//             document.getElementById("refresh").disabled = false
//         },
//     })
// }

// // checkBalance()

// $("#generate").click(function () {
//   var Text = document.getElementById('user-input').value;
//   var input = {
//       'user-input': `${Text}`,
//   };
//   $.ajax({
//       url: '/ajax',
//       type: 'POST',
//       data: JSON.stringify(input),
//       dataType: "json",
//       contentType: "application/json",
//       success:function (d) {
//         console.log("数据提交成功")
//       },
//       error:function (d) {
//           console.log(d)
//           alert("提交数据失败，请检查代理设置或余额。")
//       }
//   })
  
//   $.ajax({
//       url:"/json",
//       type:"get",
//       async: true,
//       timeout: 60000,
//       beforeSend:function(){
//         document.getElementById('user-input').disabled = true
//         document.getElementById('generate').disabled = true
//         document.getElementById('loader').style.display = 'flex'
//     },
//       success:function (data) {
//           document.getElementById('user-input').disabled = false
//           document.getElementById('generate').disabled = false
//           document.getElementById('loader').style.display = 'none'
//           chart.clear()
//           chart.setOption(optool)
//           chart.setOption($.parseJSON(data));
//       },
//       error:function (data) {
//           alert("获取返回json失败，console已记录返回数据")
//           console.log(data)
//       },
//       complete:function(){
//         document.getElementById('user-input').disabled = false
//         document.getElementById('generate').disabled = false
//         document.getElementById('loader').style.display = 'none'
//       }
//   })
// })

// $("#refresh").click(function(){
//     checkBalance()
// })

// // setInterval(checkBalance, 30000) #定时查看
// const https = require('https');

var httpRequest = new XMLHttpRequest();

var postData = JSON.stringify({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: '你好！给我讲个笑话。' }],
});

var options = {
  hostname: 'openai.api2d.net',
  port: 443,
  path: '/v1/chat/completions',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer fk186769-Plun3BQKBY7ThBPxUTfoxknzlMdCMywe', 
  },
};

// var req = https.request(options, (res) => {
//     console.log('statusCode:', res.statusCode);
//     console.log('headers:', res.headers);
  
//     res.on('data', (d) => {
//       process.stdout.write(d);
//     });
//   });
  
  
//   req.on('error', (e) => {
//       console.error(e);
//     });
    
//     req.write(postData);
//     req.end();

httpRequest.send(options);

httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest)
        var result = httpRequest.responseText;
      } else {
        //处理请求失败
        alert('请求失败');
      }
    }
  };

  fetch("https://www.cnblogs.com/dolphin0520/ajax/GetPostStat", {
    "headers": {
      "accept": "application/json, text/javascript, */*; q=0.01",
      "accept-language": "zh-CN,zh;q=0.9",
      "content-type": "application/json; charset=UTF-8",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"Windows\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "x-requested-with": "XMLHttpRequest"
    },
    "referrer": "https://www.cnblogs.com/dolphin0520/p/3932921.html",
    "referrerPolicy": "origin-when-cross-origin",
    "body": "[3932921]",
    "method": "POST"
  });
