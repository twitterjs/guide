# How to fetch a single tweet

Unlike users, a tweet can only be fetched using its id. In twitter.js, you can fetch a tweet by either using its id or a [`TweetResolvable`](https://twitter.js.org/modules.html#TweetResolvable).

### Fetch by tweet id

You can use [`TweetManager#fetch`](https://twitter.js.org/classes/TweetManager.html#fetch) method to fetch a single tweet by id:

```js:no-line-numbers
const tweet = await client.tweets.fetch({
  tweet: '1336749579228745728'
});
```

### Fetch by tweet resolvable
