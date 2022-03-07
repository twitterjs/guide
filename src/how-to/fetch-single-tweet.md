# How to fetch a single tweet

You can fetch a tweet by either using its id or any other valid [`TweetResolvable`](https://twitter.js.org/modules.html#TweetResolvable).

### Fetch by tweet id

You can use [`TweetManager#fetch`](https://twitter.js.org/classes/TweetManager.html#fetch) method to fetch a single tweet by id:

```js:no-line-numbers
const tweet = await client.tweets.fetch('1336749579228745728');
```

### Fetch by tweet resolvable

You can also pass a [`TweetResolvable`](https://twitter.js.org/modules.html#TweetResolvable) to the fetch method and twitter.js will automatically resolve the tweet to fetch:

```js:no-line-numbers
const tweet = await client.tweets.fetch(TweetResolvable);
// It can be a Tweet, SimplifiedTweet, or any other valid TweetResolvable
```
