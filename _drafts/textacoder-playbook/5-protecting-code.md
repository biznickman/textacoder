Hi {{ subscriber.first_name }},

Today we are going to jump into a situation which is far more common than you'd expect. I can't tell you how many software development projects I've witnessed implode. Even the best entrepreneurs and developers have projects turn south.

One example is a good friend of mine who runs a successful e-commerce business with over $5 million in annual sales. One of his developers became unreliable and was fired soon after. Unfortunately for my friend, the developer had full control over the company's digital presence. The website, Facebook account, Twitter account, and more was all controlled by this one developer.

Very soon after being fired the developer began sabotaging the business. The site started having broken links and the Twitter account began publishing negative tweets. The situation was compounded by the fact that my friend had zero control over the logins to different services. In other words, he had zero control over his own business!

While most engineers don't go crazy and begin breaking everything in sight, it's not unheard of. The worst part of this is that you paid for the software that the developer is beginning to destroy.

Fortunately, you can avoid this unfortunate situation with proper preparation. This email outlines the two primary precautions for protecting any flawless software development project.

## Keeping Track Of Logins
The first requirement is having management of all your logins. I recommend using a service like [Dashlane](https://www.dashlane.com/business) to store all of your logins in the company. Should you have to fire a developer, you can go in and change the passwords the weekend before doing so.

Here's the key thing to keep in mind: not all passwords are easily changed. While Twitter passwords can be changed easily, and you can easily remove people from Facebook Pages, server logins are not as easy to change. As you work with your developer(s) on any project you can always keep up to date on all the services you are subscribed to.

Require that all your developers and other team members store the logins in Dashlane. This isn't just so you can be protected when firing someone! It's also valuable to keep track of all the services that you are connected to.

So head over to [Dashlane](https://www.dashlane.com/business) and set up an account if you don't have one yet!

## Backing Up Your Code
So now that you are slightly more protected with all the company logins under your control, it’s time to protect your investment in software.

At Text A Coder we use [Github](https://www.github.com/) for revision control management. All software that’s written is committed to a central location for future access and having the ability to keep track on all changes.

While a developer could login to a server and just delete your code in theory, you’ll always have a backup. If you don’t have an account on Github already, go create one on [their homepage](https://github.com/).

While you can use a personal account to collaborate with others (at $7/month), I recommend spending the $25 / month as an organization. If you are willing to suck up the additional cost, [register an organization here](https://github.com/join?source=button-business).

After you’ve done so, you want to create a repository for each project you work on. If you aren’t familiar with git and revision control systems, don’t worry.

**What is version control?**
Fundamentally, version control is simply a system for keeping track of changes to files. While it was originally limited to software development, products like Google Docs and Dropbox have introduced version control to help you keep track of changes to documents.

In the case of software development it’s absolutely critical as new versions can introduce new bugs. Not only can you revert back to a prior version to make sure your program is stable but you can see what changes introduced a bug.

**What is git?**
Developers have preferences for various types of version control systems. The previously popular version control was called SVN (short for Subversion). Eventually it was overtaken by Git which is the most popular version control software today.

The power of git and version control systems in general comes when developers begin collaborating with each other. Two or more developers can work on the same project without being concerned about pushing conflicting changes.

The version control system will automatically pick up on it. However in order to collaborate, you need a central repository where everything goes and developers can check their changes against.

**How does github fit into this?**
That’s where github come in. It’s the central repository for an organization’s code. Prior to github, organizations used to host their own repositories. This resulted in additional overhead both in time and money.

Thanks to github, you can avoid the setup costs and pay just $25 / month. If you really want you can save some money by using [Bitbucket](https://bitbucket.org/) as an alternative, however the rest of this email is Github centric.

## Creating Your First Repository
So now that I’ve heavily sold Github, let’s quickly set up a repository. After you’ve registered, there’s a good chance they prompt you to create your first repository.

As I mentioned before, the repository is just a place to store all the code for this project. Should Github not prompt you to create your repository, you should see the following button on the right side of your organization dashboard page:

![create repository button](https://s3.amazonaws.com/assets.textacoder.com/img/flawless-development/1-github-create-repository.gif)

That will bring you to a screen where you can set up your first repository:

![create repository page](https://s3.amazonaws.com/assets.textacoder.com/img/flawless-development/2-github-create-repository.gif)

All you need to do is name this after your current project and make sure “Private” is selected. Private repositories cannot be accessed by anyone who isn’t explicitly given permission to view them.

After creating the repository you will see the following screen:

![repository add teams button](https://s3.amazonaws.com/assets.textacoder.com/img/flawless-development/3-github-add-teams.gif)

Just click on the “Add teams and collaborators” button. At this point you are going to need to know the username of your developers. Whether you are working with TextACoder or a developer that you hire directly, you’ll be typing the username into the field displayed in the photo below.

![repository add teams page](https://s3.amazonaws.com/assets.textacoder.com/img/flawless-development/4-github-add-teams.gif)

After this you are good to go! Just supply the user with “Write” permissions and they can publish code to the repository.

## You Are Now Protected!
While this isn’t a fool proof system, these two steps will grant you more control over your development process.

Before I wrap up this email I have a quick confession. We've gone over how to hire your developer but I haven't gone over how to pay engineers. In my next email I'll share a quick story about one type of pricing.

Talk soon,
Nick
