# yushiv2

##Welcome to yushi Game project by Umeka!

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
