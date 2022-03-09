# How to fetch multiple tweets

You can use either of the following ways to fetch a [`Collection`](https://discord.js.org/#/docs/collection/stable/class/Collection) of [`Tweet`](https://twitter.js.org/classes/Tweet.html):

### Fetch by tweet ids

You can pass an array of tweet ids to [`TweetManager#fetch`](https://twitter.js.org/classes/TweetManager.html#fetch) method to fetch multiple tweets:

```js:no-line-numbers
const tweets = await client.tweets.fetch(['1336749579228745728', '1460324089726320643']);
```

### Fetch by tweet resolvables

You can also pass an array of [`TweetResolvable`](https://twitter.js.org/modules.html#TweetResolvable) to [`TweetManager#fetch`](https://twitter.js.org/classes/TweetManager.html#fetch) method and twitter.js will automatically resolve the tweets to fetch:

```js:no-line-numbers
const tweet = await client.tweets.fetch([TweetResolvable, TweetResolvable]);
// It can be an array of Tweet, SimplifiedTweet, or any other valid TweetResolvable
```
