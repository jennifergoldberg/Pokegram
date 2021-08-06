### Project Zero - Pokegram
A Pokemon inspired photo share app
Our objective is to reverse engineer a similar web app to Instagram, called Pokégram. We, the developers, both regularly use Instagram and enjoy the user experience. Our version will be a Pokémon themed web app with features similar to Instagram. We decided to focus on 3 key features from Instagram:
- Create, edit and delete Posts 
- Like Posts
- Create, edit, likes and delete comments on Posts 

We want to improve on the flow/design of Instagram by simplifying the post process and fitting each post to the visual height of the screen. Currently Instagram on desktop and occasionally on mobile require you to scroll to see the whole post including comments. We also want to make adding a post the most important feature, which we plan to extend to both phone, tablet, and desktop applications. 

### User Stories/ App Logic
The user will be presented with the index page showing all posts from all users. From here they will have an option to either create their own post, and click on specific posts to view, and create/edit/delete both comments and posts from the view page. If the user choses to create a post, they will be redirected to the post create page where they will have to choose an avatar, input a username, link an image, and input text. Once posted the post will be available on the index page for everyone to see and for other users to like and comment. The user can also view comments on specific posts where it will redirect them to a show page showing that specific post with all comments associated with it. On this show page, the user can create comments, and also edit or delete comments associated with that post. The user will also have an option to delete or edit posts where it will redirect them to an edit page where they can change anything about the post. From here on, they user will have control to create, delete and edit both posts and comments, and like other posts and comments. 

### WIRE FRAMES
![WIREFRAME](https://i.imgur.com/7WPImqW.png)
![WIREFRAME](https://i.imgur.com/QOShJC5.png)
![WIREFRAME](https://i.imgur.com/rpmMczU.png)

### Logic Approach

- The goal was to be able to:
  - Create, edit, and delete posts. 
  - Create, edit and delete comments. 
  - Like and unlike both posts and comments.

- REST - CRUD
![RESTCRUD](https://i.imgur.com/PjjafXc.png)
![RESTCRUD](https://i.imgur.com/cwqipme.png)


- POST ROUTES

- GET INDEX
```javascript
router.get('/', async (req, res, next) => {
  try {
    const allPosts = await Post.find({});
    const allComments = await Comment.find({});
    const context = {
      post: allPosts,
      comment: allComments,
    };
    return res.render("index", context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next()
  }
});
```

- GET NEW PRESNTATIONAL
```javascript
router.get('/new', (req, res) => {
  const context = {};
  return res.render('new', context);
});
```

- POST NEW CREATE
```javascript
router.post('/new', async (req, res) => {
  try {
    const createdPost = await Post.create(req.body);
    return res.redirect("/")
  } catch (error) {
    const context = {
      error,
    }
    return res.render('/', context);
  }
});
```

- GET SHOW PRESENTATIONAL
```javascript
router.get('/:id', async (req, res, next) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    const foundComment = await Comment.find({ post: req.params.id });
    console.log(foundPost);
    console.log(foundComment);
    const context = {
      post: foundPost,
      comment: foundComment,
    };
    return res.render('show', context);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});
```

- GET EDIT PRESENTATIONAL
```javascript
router.get("/:id/edit", (req, res, next) => {
  Post.findById(req.params.id, (error, foundPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    const context = {
      post: foundPost,
    };

    return res.render("edit", context);
  });
});
```

- PUT/PATCH POST UPDATE
```javascript
router.put("/:id", (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true, }, (error, updatedPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    return res.redirect('/');
  }
  );
});
```

- DELETE POST FUNCTIONAL
```javascript
router.put("/:id", (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true, }, (error, updatedPost) => {
    if (error) {
      console.log(error);
      req.error = error;
      return next();
    }

    return res.redirect('/');
  }
  );
});
```

- UPDATE ROUTE POST LIKES
```javascript
router.put('/likes/:id', async (req, res, next) => {
  try {
    const foundPost = await Post.findById(req.params.id);
    await Post.findByIdAndUpdate(
      req.params.id,
      { $set: { likes: !foundPost.likes } },
      { new: true })
    return res.redirect('/posts');
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});
```

- COMMENTS ROUTES

- CREATE COMMENT ROUTE
```javascript
router.post("/addcomment/:id", async (req, res) => {
  try {
    req.body.post = req.params.id;
    const createdComment = await Comment.create(req.body);
    console.log("createdComment", createdComment);
    return res.redirect(`/posts/${req.params.id}`)
  } catch (error) {
    console.log(error);
    req.error = error;
  }
}
);
```

- UPDATE COMMENT ROUTE
```javascript
router.put("/:id", async (req, res, next) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true, });
    console.log(updatedComment);
    return res.redirect(`/posts/${updatedComment.post}`);
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
})
```

- DELETE COMMENT ROUTE
```javascript
router.delete('/:id', async (req, res, next) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    return res.redirect(`/posts/${deletedComment.post}`)
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});
```

- UPDATE ROUTE COMMENT LIKES
```javascript
router.put('/comments/likes/:id', async (req, res, next) => {
  try {
    const foundComment = await Comment.findById(req.params.id);
    console.log(foundComment);
    await Comment.findByIdAndUpdate(
      req.params.id,
      { $set: { likes: !foundComment.likes } },
      { new: true })
    return res.redirect('/posts');
  } catch (error) {
    console.log(error);
    req.error = error;
    return next();
  }
});
```

### Color Palette
```javascript
:root {
  --white: #FAFAFA;
  --yellow: #f2c335;
  --gold: #f2b035;
  --blue: #202d73;
  --pink: #f24b59;
	--white-white: #FFFFFF;
	--purple: #8684bf;
	--red: #ff1a1a;
}
```

### FONTS
```javascript
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=**Press+Start+2P**&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

### CSS Framework
Bootstrap- https://getbootstrap.com/

### Issues Encountered
- Early on issues was just getting the process of using github with someone else. Pushing up and pulling down was def new and something to get used to.
- Routing and calling one the right object can get very confusing if you dont be careful with your naming conventions. So be very particular on what you name things. 
- First time using Bootstrap and SASS is definitely a challenge. Initally a challenge to implement but worth the effort to understand Bootstrap.
- Mongodb Atlas integration for both users to utilize.
- Heroku Deployment issues for missing mongoose requirements (mistake on our end).
- The three dots on the comment for the edit and delete WILL NOT MOVE. 
- Getting Bootstrap to do things to make it not look too much like Bootstrap.
- Alot of our issues we over thought, when we there were much simpler ways to tackle things. 
- Undertsanding how to call files from what folders is still not super clear. But this project helped us understand it alot better. 

### SOURCES

- ICON ASSETS
https://www.flaticon.com/packs/pokemon-go

- Bootstrap
https://getbootstrap.com/

- SASS
https://sass-lang.com/

- GOOGLE FONTS
https://fonts.google.com/

- STACKOVERFLOW
https://stackoverflow.com/

- COOLORS
https://coolors.co/

- HEROKU
https://www.heroku.com/

- GITHUB
https://github.com/

- MONGOOSE
https://mongoosejs.com/

- GOOGLE
https://www.google.com/


### CREATED BY
- Jennifer Goldberg
https://www.linkedin.com/in/jennifer-goldberg/
https://github.com/jennifergoldberg

- Gerald Tiamzon
https://www.linkedin.com/in/gerald-tiamzon/
https://github.com/gtiamzon

