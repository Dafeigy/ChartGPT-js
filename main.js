const prompt = "给我讲个笑话吧"
    const MaxTokens = 30
    function getResponse(){
        // 异步对象
        var xhr = new XMLHttpRequest();

        // 设置属性
        xhr.open('post', 'https://openai.api2d.net/v1/chat/completions');

        // 如果想要使用post提交数据,必须添加此行
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Authorization","Bearer xxxxxxxxxxxxxxxxxxxxxxx");

        // 将数据通过send方法传递
        data = JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: '用Python写一个冒泡排序，不需要其他任何说明，仅需要代码。' }],
        });
        xhr.send(data);

        // 发送并接受返回值
        xhr.onreadystatechange = function () {
            // 这步为判断服务器是否正确响应

            if (xhr.status == 200){
                var response = JSON.parse(xhr.responseText.replace(/[\r|\n|\t]/g,""))
                const reply = response.choices[0].message.content
                console.log(reply)
            }
            else{
                alert(xhr.status)
            }
        };
    }