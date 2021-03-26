insert into users(hash, email)
values (${hash}, ${email})
returning *;