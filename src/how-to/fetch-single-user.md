# How to fetch a single user

There are multiple ways to fetch a [`User`](https://twitter.js.org/classes/User.html) in twitter.js. All of them are shown below:

### Fetch by username

You can use the [`UserManager#fetchByUsername`](https://twitter.js.org/classes/UserManager.html#fetchByUsername) method to fetch a user by its username:

```js:no-line-numbers
const user = await client.users.fetchByUsername('iShiibi');
```

### Fetch by user id

You can use the [`UserManager#fetch`](https://twitter.js.org/classes/UserManager.html#fetch) method to fetch a user by its id:

```js:no-line-numbers
const user = await client.users.fetch('1253316035878375424');
```

### Fetch by user resolvable

You can also pass a [`UserResolvable`](https://twitter.js.org/modules.html#UserResolvable) to the fetch method and twitter.js will automatically resolve the user to fetch:

```js:no-line-numbers
const user = await client.users.fetch(UserResolvable);
// It can be a User, SimplifiedUser, Tweet or any other valid UserResolvable
