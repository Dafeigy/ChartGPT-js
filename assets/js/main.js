const prompt = `根据需求，直接返回提供兼容5.2.1版本的ECharts options符合格式的JSON字符串,回复格式如下:{
    "title": {
    "left": 'center'
    },
    "tooltip": {
    },
    "legend": {
    "orient": 'vertical',
    "left": 'left'
    },
    "series": [],
    ...
    }，不需要说明解释返回内容，请严格遵循json语法返回。`
const MaxTokens = 30

const basic = [
    {"role": "system", 
     "content": prompt}
]


const loadingAnimation = document.getElementById("loading-animation");
const chartContainer = document.getElementById("chart-container");
console.log(chartContainer)
const chart = echarts.init(chartContainer);

console.log("ECharts initialized.")

var api_key = `fk xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
var base_url = `https://openai.api2d.net`
var user_text = ""



const optool = {"toolbox": {
    "show": true,
    "x": 'center',
    "y": 'bottom',  
    "feature": {
        "dataView": { show: true, readOnly: false },
        "saveAsImage": {show: true, title: '保存截图', type: 'png'}}},}



const responseText = `
{
    "xAxis": {
        "type": "category",
        "data": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    "yAxis": {
        "type": "value"
    },
    "series": [
        {
            "type": "line",
            "data": [150, 230, 224, 218, 135, 147, 260]
        }
    ]
}
`


toggleSettings = function(){
    var user_info = document.getElementById("user-info")

    if (user_info.style.display != "flex"){
        if (user_info.style.display == "flex"){
            user_info.style.display ='none'
        }
        else{
            user_info.style.display ='flex'
        }
    }
    else {
        user_info.style.display = "none"
    }
}

setChartOptions = function(){

}
setOptions= function (){
    api_key = document.getElementById("key").value
    base_url = document.getElementById("url").value
    getBalance()

}

getResponse = function (){
        // 异步对象
        user_text = document.getElementById("user-input").value
        console.log(`${user_text}`)
        var xhr = new XMLHttpRequest();
        xhr.open('post', `${base_url}/v1/chat/completions`);

        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Authorization",`Bearer ${api_key}`);

        // 将数据通过send方法传递
        var msg = basic.slice()
        msg.push({ role: 'user', content: `${user_text}` })
        data = JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: msg
        });
        console.log(data)
        xhr.send(data);
        
        // 发送并接受返回值
        xhr.onreadystatechange = function () {
            // 这步为判断服务器是否正确响应
            if (xhr.status == 200){
                var response = console.log(xhr.responseText)
                var response = JSON.parse(xhr.responseText)
                const reply = response.choices[0].message.content //  reply = response["choices"][0]["message"]['content']
                console.log(reply)
                chart.clear()
                chart.setOption(optool)
                chart.setOption($.parseJSON(reply));
            }
            else{
                alert(xhr.status)
            }
        };
        
    }

getBalance = function(){
    if (base_url != "https://openai.api2d.net") {
        alert("Only API2D : https://openai.api2d.net is supported balance check now")
    }

    var xhr = new XMLHttpRequest();
    // 如果想要使用post提交数据,必须添加此行
    
    xhr.open('get', `${base_url}/dashboard/billing/credit_grants`);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.setRequestHeader("Authorization",`Bearer ${api_key}`);
    xhr.send();
// 第四步： 监听onreadystatechange事件
    xhr.onreadystatechange = function(){
    // 监听xhr对象的请求状态 与服务器的响应状态
    if(this.readyState == 4 && this.status == 200){
        var balres = JSON.parse(xhr.responseText.replace(/[\r|\n|\t]/g,""))
        document.getElementById('balance').value = `${balres.total_granted} p`
    }   
    }
}