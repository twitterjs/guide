# How to fetch multiple users

You can use either of the following ways to fetch a [`Collection`](https://discord.js.org/#/docs/collection/stable/class/Collection) of [`User`](https://twitter.js.org/classes/User.html):

### Fetch by usernames

You can use the [`UserManager#fetchByUsername`](https://twitter.js.org/classes/UserManager.html#fetchByUsername) method to fetch multiple users by their usernames:

```js:no-line-numbers
const users = await client.users.fetchByUsername(['iShiibi', 'TwitterAPI']);
```

### Fetch by user ids

You can use the [`UserManager#fetch`](https://twitter.js.org/classes/UserManager.html#fetch) method to fetch multiple users by their ids:

```js:no-line-numbers
const users = await client.users.fetch(['1253316035878375424', '6253282']);
```

### Fetch by user resolvables

You can also pass an array of [`UserResolvable`](https://twitter.js.org/modules.html#UserResolvable) to the fetch method and twitter.js will automatically resolve the users to fetch:

```js:no-line-numbers
const users = await client.users.fetch([UserResolvable, UserResolvable]);
// It can be an array of User, SimplifiedUser, Tweet or any other valid UserResolvable
```
