function tweet() {
    // 環境変数読み込み
    require('dotenv').config();
    const twitter = require('twitter');
    const client = new twitter({
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token_key: process.env.ACCESS_TOKEN_KEY,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
    });

    // Tweet Body 作成
    const fs = require("fs");
    const filepath = "./body.txt";
    const texts = fs.readFileSync(filepath, 'utf-8');
    const lines = texts.toString().split('\r\n');
    let tweet_body = "";
    for (let i = 0; i < lines.length; i++) {
        tweet_body = tweet_body + lines[i];
    }

    // Tweet !!
    client.post('statuses/update', { status: tweet_body }, function (error, tweet, response) {
        console.log(response);
        if (!error) {
            console.log(tweet);
        } else {
            console.log('error');
        }
    });
}
