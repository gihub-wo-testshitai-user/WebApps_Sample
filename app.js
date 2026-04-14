const express = require('express');
const app = express();

// ポート設定（Azure対応）
const PORT = process.env.PORT || 3000;

// ルート
app.get('/', (req, res) => {
    res.send('Hello Azure Web Apps! 🚀 Modify 2026/4/10');
});

// ヘルスチェック用
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// 起動
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
