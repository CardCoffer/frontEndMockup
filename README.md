# Front-End Mockup: 
This is front-end MVP of Card Coffer  for SWMontreal
This project has been stoped,and was my first public try on AngularJS


	
### This is the schema for "Cards" class in Parse.com database 
 https://parse.com/apps/card-coffer/collections#class/Cards
	
- objectID is created automatically by DatabaseManagementSystem and serves as the primary key. It is set after the card is synced with server.
- avatar is the logo of the affiliation - note: it should be of a very small size (48px * 48px max) because of network traffic issues
- backgroundColor is used for now instead of themes. the format is string, and should be set using a color picker in design studio
- email: is the email "written" on this card, which can be the same as the username email (main email, parent!)
- parent: parent refers to the owner of the card. for example, if my account username is "xx@cardcoffer.com", all the cards I create for myself have their parent field set to "xx@cardcoffer.com"
	
**NOTE:** inside the parantheses in front of each column, is the value type set in Parse database. and "automatic" in the parantheses means that this field should not be modified manually, and is filled by server.

```JAVASCRIPT
{
		"objectId": "123123123123123123", (String - automatic)
		"avatar": "", (File)
		"backgroundColor": "color", (String)
		"name": "XX XXXXXX", (String)
		"jobtitle": "Developer", (String)
		"affiliation": "Card Coffer", (String)
		"address": "Montreal, Canada", (String)
		"phone": "+514 XXX XXXX", (String)
		"email": "XX@cardcoffer.com", (String)
		"facebook": "facebook.com/XXXX", (String)
		"twitter": "", (String)
		"linkedin": "", (String)
		"googleplus": "",(String)
		"miniresume": "I am a developer, hacker.", (String, 140 characters max)
		"parent": "xx@lcardcoffer.com", (String)
		"createdAt": "2015-03-28" (Date - automatic) 
	}
```
