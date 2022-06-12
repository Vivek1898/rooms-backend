### rooms-backend


- **Implemenation of the REST API**

----
- **AUTH**
```sh
POST

/api/auth/register
/api/auth/login

```
----
- **Hotels**
```sh
/api/hotels

POST
/api/hotels

PUT 
/api/hotels/:id

DELETE
/api/hotels/:id

GET
- All Hotels
/api/hotels/

- By Unique Id
/api/hotels/find/:id

- By type
/api/hotels/countByType

- get rooms in hotel
/api/hotels/room/:id

```
----
- **ROOMS**
```sh
/api/rooms/

POST 
/api/rooms/:hotelid

PUT
/api/rooms/availability/:id
/api/rooms/:id

DELETE
/api/rooms/:id/:hotelid

GET
- get all
/api/rooms/:id

- by Id
/api/rooms/:id

```

----
- **Mess**
```sh
/api/services/mess

POST
/api/services/mess/

PUT
/api/services/mess/:id

DELETE
/api/services/mess/:id

GET
- get all
/api/services/mess/

- by id
/api/services/mess/find/:id
```

----
- **Maid**
```sh
/api/services/maid
POST
/api/services/maid/

PUT
/api/services/maid/:id

DELETE
/api/services/maid/:id

GET
- get all
/api/services/maid/

- by id
/api/services/maid/find/:id

```

----
- **Gym**
```sh
/api/services/gym
POST
/api/services/gym/

PUT
/api/services/gym/:id

DELETE
/api/services/gym/:id

GET
- get all
/api/services/gym/

- by id
/api/services/gym/find/:id
```

----
- **Laundary**
```sh
/api/services/laundary

POST
/api/services/laundary/

PUT
/api/services/laundary/:id

DELETE
/api/services/laundary/:id

GET
- get all
/api/services/laundary/

- by id
/api/services/laundary/find/:id
```



