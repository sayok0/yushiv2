# yushiv2

## Welcome to yushi Game project by Umeka!

This project is just for testing how mongoDB works togheter with javascript files and webpage.
Main goal with Yushi is to add super basic webpage that only contains (for now) 4 button;
1) start new game   ----> It will create new game object that contains soome basic info, like player data & enemy.
2) save game     -------> It will save current game into mongoDB! Don't know how to do that yet :/
3) load game     -------> It will load game from moongoDB server! Don't know how to do that yet :/
4) Attack      ---------> Attack enemy button! And update current game object depend on how much dmg player did, and how much hp player & enemy have left.

Note;
All button are from webpage, something I will add much later.
First stage is to add basic server structor, and try different method guide how to add CRUD, mostly create & update
becuase I need to copy my game object into mongoDB, and also update when player press "save game".

Second stage (need help here...) is to add "real" game files into some javascript file, and I want to save that file into mongoDB.
For this project only, I will just follow some guide, but that is just some data inside server files, not outside...



# < 2022-07-21 >  
### Update 1;  
** Did add new game project: yushi v2 **  
This "template" is just 2x modules & .gitignore files.  

### Update 2;
Added Model folder with 3 files. One of them did I create, rest of them are from some guide. See more link.
Updated my app.js files and export all Models.
Did only add POST methods for each Models for now, just testing different schematypes and mongoDB CRUD setup for POST.


# < 2022-08-01 >  
### Update 1;  
Updated savefile model & api,
this will check if current saveFileID exist or not. This should be unique string value, that is what user can then later load.



# < Game check >  
### Add server game project. This will be our server / API. node.js, express + mongoose  
Done!  <---- You can also check package to see all other module that I have added.  
### Add basic player database  
Done!  <---- Added on mongoDB Atlas. I might delete this later due Schema.  
### Add basic player schema  
Done!  <---- Just some test value. Will add more (and/or delete) to this Schema later...  
### Make sure that saveFileID is unique, give "guest" some message to change name if so...  
Done! PST ---> Only on server mode and on "guest" mode  
### Create new project on "Client" folder. This will be our main "game" test project for Yushi!  
N/A   <---- This will take some time, not sure how to build it yet. PST ---> Will NOT focus on styling, only super basic.  
### Add User account for easy acces to game-file.  
N/A   <---- Currently learning how to add user account. And I'm not sure how to denied api if "guest" is not loged in :/   
### Add Enemy to our database!  
N/A   <----- Some note: This is just some text-turn-base RPG games! So I might add like 5-10 enemy for now.  
### Add some security, and also update user account setup. Maybe also API-key, or similar.
N/A   <----- Not sure If I care so much to do this part, this is just some test project. But how knows... Maybe I will add it :)   
### Let's style our page! Add some few pictures & audio  
N/A   <----- When my game is somewhat done, then I will add some styling to my game project.
### Clean up my script. Both server & client.
N/A   <----- Until this point, I will just add some super basic script. So i will clean up some trash code, and re-edit to much shorter ect...   
### Final project. More styling, update my database.  
N/A   <----- I have right now over 50 thing I whant to update/add to this game-project. So this part will prop take 6-20 mounth.
Like add more styling and clean up my CSS file. Update my database by adding more player that user can select from!
And also add some inventory, items & skill. Plus some another 10-20 extra thing that I will add to my database.
Finaly, I will update and clean my game-project, that is both server&client side and mongoDB Atlas.