


create table words (id serial primary key, word varchar(100));

create table hints (id serial primary key, hint varchar(500), word_id int references words(id));

insert into words (word) values ('anew'), ('allergy'), ('amen');

insert into hints (hint, word_id) values ('to gradually stop doing something', 1), ('to decrease', 1), ('a room or building for the display or sale of works of art', 2), ('Of or relating to a monarch; royal', 2), ('a growth of long hair on the neck of a horse, lion, or other animal', 3);