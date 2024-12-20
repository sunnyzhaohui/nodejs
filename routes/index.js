const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件以解析 JSON 请求体
app.use(express.json());

app.post('/process', (req, res) => {
    const { text } = req.body;

    // 返回 JSON 字符串，包含输入文本
    const response = {
        originalText: text,
        message: 'Received your text!',
    };

    res.json(response);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
