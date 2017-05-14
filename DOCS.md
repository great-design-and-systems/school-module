# school-module v0.0.0



- [SchoolProfile](#schoolprofile)
	- [Create school profile](#create-school-profile)
	- [Delete school profile](#delete-school-profile)
	- [Retrieve school profile](#retrieve-school-profile)
	- [Retrieve school profiles](#retrieve-school-profiles)
	- [Update school profile](#update-school-profile)
	


# SchoolProfile

## Create school profile



	POST /school-profiles


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>School profile's name.</p>							|
| address			| 			|  <p>School profile's address.</p>							|

## Delete school profile



	DELETE /school-profiles/:id


## Retrieve school profile



	GET /school-profiles/:id


## Retrieve school profiles



	GET /school-profiles


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update school profile



	PUT /school-profiles/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>School profile's name.</p>							|
| address			| 			|  <p>School profile's address.</p>							|


